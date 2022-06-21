type TSentenceData = {
  en: string;
  ru: string;
};

export type TGetSentenceData = {
  sentence: TSentenceData;
};

// TODO: (AM) проверить
export type TGetAllSentencesData = TGetSentenceData[];
