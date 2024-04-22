/** Function to split words in letters and pushing them into a span tag */
const handleSplitWords = (word: string, id: string) => {
  let letters: React.JSX.Element[] = [];
  word.split('').forEach((letter: string, index: number) => {
    letters.push(
      <span id={id} key={`lettre_${index}`}>
        {letter}
      </span>
    );
  });
  return letters;
};

/** Function to split the phares into words */
export const handleSplitPhrase = (_phrase: string, id: string) => {
  let body: React.JSX.Element[] = [];
  _phrase.split(' ').forEach((word: string, index: number) => {
    const letters = handleSplitWords(word, id);
    body.push(<p key={`word_${index}`}>{letters}</p>);
  });
  return body;
};
