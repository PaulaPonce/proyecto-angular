export class AddVerse {
  name = '';
  firstVerse = '';
  verses: VerseList[] = []; // va con dos puntos porque define el tipo
}

export class VerseList {
  id = 0;
  verse = '';
}

export const addVerses: AddVerse[] = [
  {
    name : 'Paula',
    firstVerse : 'este es el primer verso',
    verses: [
      {
        id : 1,
        verse: 'verso1'
      },
      {
        id : 2,
        verse: 'verso2'
      }
    ]
  },
  {
    name : 'Player2',
    firstVerse : 'verso player2',
    verses: [
      {
        id : 1,
        verse: 'verso1-2'
      },
      {
        id : 2,
        verse: 'verso2-2'
      }
    ]
  }
];
