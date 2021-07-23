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
    if(text.includes('time')){
        speech.text = 'It is ' + new Date().getHours()+" "+new Date().getMinutes()+" right now"
    }
    else if(text.includes('my birthday'))
    speech.text= ' How would I know'

    if(text.includes('date')){
        speech.text= 'It is' + new Date()
    }

    // greetings
    if(text.includes(' how are you')|| text.includes(' how is it been')){
       speech.text = 'I am good, how are you. Welcome to you own personal assistant'
    }

    if(text.includes('what is your name')){
        speech.text= 'you can call me by any name' 
    }
 
    if(text.includes('thank')){
        speech.text= 'you are welcome' 
    }

    if(text.includes('what is pi')){
        speech.text= 'its a very delicious food' 
    }

    if(text.includes('some ideas of making food')||text.includes('what food should I make')||text.includes('what food should I create')||text.includes('what food should I prepare')){
        speech.text= 'You can eat salad, chicken, soup, ice cream, sandwhich or even an egg' 
    }

    if(text.includes('best places to eat in Kalahari')||text.includes('best places to eat at the Kalahari')){
        speech.text= 'The best places to eat at the Kalahari is Sortino’s Italian Kitchen,the last bite, blux grill and bar or the pizza pub' 
    }

    if(text.includes('make money')){
        speech.text= 'You can create money by doing chores, helping to clean the snow area for someone,  or maybe applying for part time jobs such as , mc donald, chick fil a, popeyes and more' 
    }

    
    if(text.includes('games to play')){
        speech.text= 'The best games are fortnite, minecraft, call of duty but my personal favorite is fifa' 
    }

    if(text.includes('Unity')){
        speech.text= 'You can get started by using their already made game such as the car game or the fps game to get started with unity. Or you can watch some tutorial on youtube' 
    }


    
    window.speechSynthesis.speak(speech)
}