//Sorry I am handing in this assignment so late.
//I was trying to figure out a way to get each
//individual name to appear in the console
//with the greeting of "hello" in front of each name.
//I was unable to find a solution without javascript
// looping all 4 names together with the greeting of
//of "hello" in front of each name. This is the closest
//I've gotten to what you wanted.


var mets = new Array();
mets[0] = "Hello Noah";
mets[1] = "Hello Matt";
mets[2] = "Hello Steven";
mets[3] = "Hello Jacob";

for (i=0;i<mets.length;i++)
{
console.log(mets[i] + " ");
}
