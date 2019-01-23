/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [
        {
          "user": {
            "name": "Newton",
            "avatars": {
              "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
              "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
              "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
            },
            "handle": "@SirIsaac"
          },
          "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
          },
          "created_at": 1461116232227
        },
        {
          "user": {
            "name": "Descartes",
            "avatars": {
              "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
              "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
              "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
            },
            "handle": "@rd" },
          "content": {
            "text": "Je pense , donc je suis"
          },
          "created_at": 1461113959088
        },
        {
          "user": {
            "name": "Johann von Goethe",
            "avatars": {
              "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
              "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
              "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
            },
            "handle": "@johann49"
          },
          "content": {
            "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
          },
          "created_at": 1461113796368
        }
      ];
      

function renderTweets(tweets) {
for (let i in tweets) {
    // console.log(tweets[i]);
    let newtweet = createTweetElement(tweets[i])
  console.log(renderTweets);

  $('#tweets-container').append(newtweet); 
      };
    }

function createTweetElement(tweet) {
    ///time convertion
const milliseconds = tweet.created_at;
const hours = `0${new Date(milliseconds).getHours() - 1}`.slice(-2);
const minutes = `0${new Date(milliseconds).getMinutes()}`.slice(-2);
const seconds = `0${new Date(milliseconds).getSeconds()}`.slice(-2);

const time = `${hours}:${minutes}:${seconds}`

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




$(document).ready(function () {
    renderTweets(tweetData);
})

