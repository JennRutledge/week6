//console.log('Did this work'); //verified that this is attached to the html, and it is :)!!
const expect = chai.expect;
const assert = chai.assert;

//can get this to diplay in the browser, need more understanding of testing to use this correctly.
//It failed as expected
describe('myFunction', function() {
    describe('#doSomething', function() {
        it('should give an array of cards', function() {
            var x = doSomething(['♥', '♦'])
            expect (x).to.equal(['♥', '♦']);
        });
        it('should throw an error if first parameter is not an array', function() {
            expect(function() {
                doSomething(1, 2);
            }) .to.throw(Error);
        });
    });
});


//     const suit = ['♣', '♦', '♥', '♠']; //ASCII code alt then number for that symbol
//     const rank = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//     const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//     for (let i = 0; i < suit.length; i++) {
        
// }
// for (let j = 0; j < rank.length; j++) {
//             this.cards.push(new Card(suit[i], rank[j], value[j]));   
//                 return this.cards;