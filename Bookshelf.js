var book = [
    {
        title: "Fire",
        stars: 5,
        sum: "Hot, \n\n   can cook!"
    },
    {
        title: "Water",
        stars: 2,
        sum: "Very wet... \n\n Hard to dry :("
    },
    {
        title: "Earth",
        stars: 3,
        sum: "It ROCKS! \n\n  haha... get it?"
    },
    {
        title: "wind",
        stars: 4,
        sum: "Sucks... \n\n or blows... XD"
    },
    {
        title: "Lightening",
        stars: 5,
        sum: "Shocking...\n\n   hah..."
    },
    {
        title: "1",
        stars: 1,
        sum: "BAD \n\n book"
    },
    {
        title: "2",
        stars: 2,
        sum: "MEH \n\n book"
    },
    {
        title: "3",
        stars: 3,
        sum: "OK \n\n book"
    },
    {
        title: "4",
        stars: 4,
        sum: "GOOD \n\n book"
    },
    {
        title: "5",
        stars: 5,
        sum: "FANTASTIC \n\n book"
    },
    {
        title: "6",
        stars: 6,
        sum: "LEGENDARY \n\n BOOOOOOK"
    },
    {
        title: "school bus",
        stars: 4,
        sum: "manual \n\n entry"
    },
    {
        title: "Licenses",
        stars: 4,
        sum: "all \n\n Memories"
    }
];

// draw shelf
fill(173, 117, 33);
for (var i = 0; i < height/100; i++){
    
    rect(0, (i+1)*120, width-1, 10);

}
// draw books
var bookPlaceY = 20;
var bookWidth = 90;
var bookPlaceX = 0;
var bookCounter = 0;
	
for(var i = 0; i < book.length/(width/100); i++)
{
	for(var j = 0; j < width/100; j++)
	{
		fill(214, 255, 219);
        rect(bookPlaceX+j*100, bookPlaceY+i*120, bookWidth, 100);
		fill(0, 0, 0);
		text(book[bookCounter].title, 10+bookPlaceX+j*100, 5+bookPlaceY+i*120, 70, 100);	
		text(book[bookCounter].sum, bookPlaceX+5+j*100, bookPlaceY+40+i*120);
		
		for(var k = 0; k < book[bookCounter].stars; k++)
		{
		    image(getImage("cute/Star"),k*15+bookPlaceX+5+j*100, bookPlaceY+65+i*120, 20, 35);
		}
		bookCounter++;
		
		//console.log(" "+book.length);
		if(bookCounter >= book.length)
		{
			break;
		}
	}
}
