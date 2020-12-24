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

const Deck = CardType.map(ty => {
    return CardValue.map(va => {
        return `${ty}-${va}`
    });
});

export {Deck};