const btn = document.getElementById('btn');
const result = document.getElementById('result');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onstart = function(){
    console.log("You can speak now")
}

recognition.onresult = function(event){
var text = event.results[0][0].transcript;
console.log(text)
document.getElementById('result').innerHTML= text
read(text)
}

function read(text){

    var speech= new SpeechSynthesisUtterance();
    speech.text = text 
 

    // greetings
    if(text.includes('how are you')|| text.includes('how is it been')){
       speech.text = 'I am good, how are you. Welcome to you own personal assistant'
    }
    if(text.includes('Hello')|| text.includes('hello')||text.includes('Hi')|| text.includes('hi')){
        speech.text = 'Welcome to your own personal assistant, where you can talk to me as your own worker. You can also say open some site such as youtube. You can start by saying How are you or maybe what is the date'
     }

    if(text.includes('what is your name')){
        speech.text= 'you can call me by any name.' 
    }
 
    if(text.includes('thank you')||text.includes('thanks')){
        speech.text= 'you are welcome' 
    }

    if(text.includes('what is pi')){
        speech.text= 'its a very delicious food' 
    }

    if(text.includes('making food')||text.includes('what food should I make')||text.includes('what food should I create')||text.includes('what food should I prepare')){
        speech.text= 'You can eat salad, chicken, soup, ice cream, sandwhich or even an egg' 
    }

    if(text.includes('eat in Kalahari')||text.includes('best places to eat at the Kalahari')){
        speech.text= 'The best places to eat at the Kalahari is Sortino’s Italian Kitchen,the last bite, blux grill and bar or the pizza pub' 
    }

    if(text.includes('make money')){
        speech.text= 'You can create money by doing chores, helping to clean the snow area for someone,  or maybe applying for part time jobs such as , mc donald, chick fil a, popeyes and more' 
    }

    
    if(text.includes('games to play')){
        speech.text= 'The best games are fortnite, minecraft, call of duty but my personal favorite is fifa' 
    }

    if(text.includes('how to use Unity')||text.includes('How to get started on Unity')){
        speech.text= 'You can get started by using their already made game such as the car game or the fps game to get started with unity. Or you can watch some tutorial on youtube' 
    }
    
    if(text.includes('can you play')){
        speech.text= 'yes I can, complete the dash, jingle bells jingle on the dash' 
    }

    if(text.includes('way')){
        speech.text= 'You got it! Awesome! Now you can say I want to have a memory competition for a very chellanging competition!' 
    }
    if(text.includes('I want to have a memory competition')){
        speech.text= 'Now you are getting starter for the memory competition. Make sure you say number by number such as two four nine. OK, all set. Repeat this. 2' 
    }
    if(text.includes('2')){
        speech.text= 'You got it. Easy Enough right. Now repeat this. 278' 
    }

    if(text.includes('278')){
        speech.text= 'You got it. Easy Enough right. Now repeat this. 45678' 
    }

    if(text.includes('4 5 6 7 8')){
        speech.text= 'Well Done! Now repeat this. 640842' 
    }

    if(text.includes('640 842')){
        speech.text= 'Very Impressive! Can you repeat this. 78422156' 
    }

    if(text.includes('78422 156')){
        speech.text= 'Amazing. Make sure you get this right to prove you are the real one at memory and focus. Repeat this. 45826784' 
    }

    if(text.includes('4582 6784')){
        speech.text= 'You have finished all the levels. You are pro at remembering things! Amazing job!' 
    }
    if(text.includes('most richest person in the world')){
        speech.text= 'The most richest person in the world is Jeff Bezos! He is the CEO of Amazon! ' 
    }

    if(text.includes('most expensive trophy')){
        speech.text= 'The most expensive trophy is the fifa world cup trophy. It  is so special that no one can touch it besides the winners. The cost of the trophy is 20 million you s dollars ' 
    }

    if(text.includes('online shopping')){
        speech.text= 'The best places for online shopping are, amazon, ebay, alibaba, aliexpress, etsy, poshmark, and some brand stores such as gucci, l v, and versacci ' 
    }

    if(text.includes('vacation') ){
        speech.text= 'The best places to go on a vacation is Diseny World, Singapores sentosa, universal studio or some beaches in miami, hawaii, or virginia ' 
    }

    if(text.includes('how to make a robot') ){
        speech.text= 'You can get started by buying an arduino uno kit and try to play with it. Go see some tutorials of programming arduino uno. Thats the way to get started ' 
    }

    if(text.includes('robot dog')|| text.includes('robot dogs') ){
        speech.text= 'The best robot dog is sony aibo. Yes it is a little bit expensive but it is very cool. If you want something cool but in your price rate, you can buy the robot jennie dog. It costs 449 dollars.' 
    }

    if(text.includes('where')&& text.includes('World Cup trophy') ){
        speech.text= 'The Fifa World Cup trophy is located at Zurich in Switzerlands museum.' 
    }


    


     // all commands that the assistant help doing on the computer

    
    if(text.includes('Cristiano Ronaldo') ){
        speech.text= 'Cristiano Ronaldo is one of the best soccer players in the world. For more information about his soccer history you can visit this site.' 
        window.open('https://www.bing.com/search?FORM=HJ2CDF&PC=HJ2C&q=cristiano+ronaldo+soccer+history')
    }

    if(text.includes('Lionel Messi') ){
        speech.text= 'Lionel Messi is one of the best soccer players in the world. For more information about his soccer history you can visit this site.' 
        window.open('https://www.bing.com/search?FORM=HJ2CDF&PC=HJ2C&q=lionel+messi+soccer+history')
    }


    if(text.includes('weather')){
       speech.text='opening the weather forecast for today for you'
        window.open('https://www.bing.com/search?q=weather+forecast&qs=WA&pq=weather+for&sc=6-11&cvid=793C4E59090541FD9844DA27E3E5FE96&FORM=QBRE&sp=1')
    }

    if(text.includes('YouTube')){
        speech.text='opening youtube for you'
         window.open('https://www.youtube.com/')
     }

     if(text.includes('YouTube')){
        speech.text='opening youtube for you'
         window.open('https://www.youtube.com/')
     }

     if(text.includes('Google')){
        speech.text='opening google for you'
         window.open('https://www.google.com/')
     }

     if(text.includes('Unity')&& ('download')){
        speech.text='opening the link to download unity for you'
         window.open('https://unity3d.com/get-unity/download')
     }
     if(text.includes('Yahoo')){
         speech.text='opening yahoo for you'
         window.open('https://www.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuYmluZy5jb20v&guce_referrer_sig=AQAAAGqbcm21KIFFmyPZWHHUWJKV2RH3WPEhk-oRG_wx62UH17AI4fh55K5szrwcxAQJHt100XKsaNod62nO52Eb72RNk6gMSHubfCUl_-6vnlwgqhXpnhRxlTSmwtmLRBlMgirIh_RmR5vzDiuTqsImVKP0aSFmWfbj-jG51w2VgAS6')
     }
     if(text.includes('Dropbox')){
        speech.text='opening dropbox for you.'
         window.open(' https://www.dropbox.com/?_hp=c&landing=dbv2')
     }

     if(text.includes('Punjabi')&& ('songs')){
        speech.text='opening the best punjabi songs fro you'
         window.open(' https://www.youtube.com/results?search_query=karan+aujla+songs')
     }

     if(text.includes('coding')&& ('learn')){
        speech.text='opening the best link to learn coding fro you'
         window.open('https://www.w3schools.com/')
     }

     if(text.includes('Hindi TV shows')&& ('watch')||text.includes('Hindi TV show')&& ('watch')||text.includes('Hindi TV shows')&& ('see')||text.includes('Hindi TV show')&& ('see')){
        speech.text='opening a link to hindi tv shows just for you'
         window.open('https://desiserials.info/')
     }

     if(text.includes('GitHub')){
        speech.text='opening github for you'
         window.open('https://www.github.com/')
     }
     if(text.includes('Translate')||text.includes('Translation')||text.includes('translate')||text.includes('translation')){
        speech.text='opening google translate to translate languages for you'
         window.open('https://translate.google.com/')
     }

     if(text.includes('time')){
        speech.text = 'It is ' + new Date().getHours()+" "+new Date().getMinutes()+" right now"
    }
    else if(text.includes('my birthday'))
    speech.text= ' How would I know'

    if(text.includes('date')){
        speech.text= 'It is' + new Date()
    }

    if(text.includes('cooking')|| text.includes('cook')){
        speech.text='opening all the cooking recipes for you'
         window.open('https://www.allrecipes.com/recipes/')
     }

     if(text.includes('Facebook')){
        speech.text='opening facebook for you'
         window.open('https://www.facebook.com/')
     }

     
    
     
    
    

    
 
    
    window.speechSynthesis.speak(speech)
}