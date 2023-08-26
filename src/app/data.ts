export interface IData {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

interface License {
  name: string;
  url: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface Definition {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
}

interface Phonetic {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
}

export interface IError {
  message: string;
  resolution: string;
  title: string;
}
