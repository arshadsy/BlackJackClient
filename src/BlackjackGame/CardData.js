const CardValue = ['A','K','Q','J','1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9',
'10'
];
const CardType=['S','C','H','D'];

// const Deck = CardValue.map(ty => {
//     return CardType.map(va => {
//         return `${ty}-${va}`
//     });
// });
const Deck = [];

CardValue.forEach(cv => CardType.forEach(ct => { Deck.push( `${ct}-${cv}`) }));


export {Deck};