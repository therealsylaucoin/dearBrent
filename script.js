app = {};

//array of quotes about Brent being old
app.quotes = [

'Young Brent in 1995? More like 1895',

'Brent is the yüngest person I know',

'I have Brent on fax speed dial',

'Brent is definitely not 27',

"Safi not getting this joke is the most Brent thing I've ever seen",

'Remember when we talked about typewriters with Brent?',

'const question = prompt("how old is Brent?");',

'I have noticed a lot of people using this massive circle cursor (also Brent). Is this for people who have difficulty seeing things on their screen or just for flavour?',

'Perhaps if you were designing a keyboard setup for someone like Brent that needed it to be able to both grow and shrink in key size for older and younger people',

'But Brent is super old.',

'Brent is 19 and he’s from Lindsay',

'Well tell brent to remove his outdated tech from my command line',

'BRENT. You lied. You said you were a Certified Young Person!',

"Wait I'm confused, I thought Safi IS a time displaced Brent",

]


//get randomw quote
app.getQuote = (array) => {
    app.randomIndex = array[Math.floor(Math.random() * array.length)];
    return app.randomIndex;
}

//bind event listener
$('button').on('click', function(){
    app.getQuote(app.quotes);
    //append to page
    $('.resultContainer').html(`<p>${app.randomIndex}</p>`);
})


