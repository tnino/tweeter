/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

    $("button").click(function () {
        $(".new-tweet").slideToggle("slow");
    });

    function renderTweets(tweets) {
        for (let i in tweets) {
            let newtweet = createTweetElement(tweets[i])
            console.log(renderTweets);
            $('#tweets-container').prepend(newtweet);
        };
    }
   function createTweetElement(tweet) {
    ///time convertion
        const milliseconds = tweet.created_at;
        const hour = `0${new Date(milliseconds).getHours() - 0}`.slice(-2);
        const minute = `0${new Date(milliseconds).getMinutes()}`.slice(-2);
        const second = `0${new Date(milliseconds).getSeconds()}`.slice(-2);

        const time = `${hour}:${minute}:${second}`

        let $tweet = $('<article>').addClass('tweet')
            .append($('<header>')
                .append($('<img>').attr('src', tweet.user.avatars.regular))
                .append($('<h1>').text(tweet.user.name))
                .append($('<span class="tweterhandle">').text(tweet.user.handle)))

            .append($('<p>').text(tweet.content.text))

            .append($('<footer>').text(time)
                .append($('<div>').addClass('icons'))
                .append($('<i>').addClass('fa fa-flag'))
                .append($('<i>').addClass('fa fa-heart'))
                .append($('<i>').addClass('fa fa-retweet')))

        return $tweet;
    }
//character counter
    $('#tweetform').submit(function (event) {
        event.preventDefault();
        let newTweetData = $(this).serialize();

        let msg = $("textarea").val();
        if (msg.length === 0) {
            $('#warning').html("you need to write a tweet");
            $('#warning').css("display", "block");
        } else if (msg.length > 140) {
            $('#warning').html("you tweet is so long");
            $('#warning').css("display", "block");
        } else {
            $('#warning').css("display", "none");

            $.post('http://localhost:8080/tweets', newTweetData)
                .then(() => {
                    $('#tweets-container .tweet').remove();
                    loadTweets()
                })
            $("#posttweet").val("");
            $('.counter').html(140);

        }
    })

    function loadTweets() {
        $.get('http://localhost:8080/tweets').then(tweet => {


            renderTweets(tweet)

        })

    }

    loadTweets()

})