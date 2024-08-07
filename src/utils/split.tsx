/** Function to split words in letters and pushing them into a span tag */
export const handleSplitLetters = (word: string, id: string) => {
  let letters: React.JSX.Element[] = [];
  word.split('').forEach((letter: string, index: number) => {
    letters.push(
      <span id={id} key={`lettre_${index}`}>
        {letter}
      </span>
    );
  });
  letters.push(<span id={id}>&nbsp;</span>);
  return letters;
};

/** Function to split the phares into words */
export const handleSplitPhrase = (
  _phrase: string,
  id: string,
  className?: string
) => {
  let body: React.JSX.Element[] = [];
  _phrase.split(' ').forEach((word: string, index: number) => {
    const letters = handleSplitLetters(word, id);
    body.push(
      <span key={`word_${index}`} className={className}>
        {letters}
      </span>
    );
  });
  return body;
};

/** Function to split the phares into words */
export const handleSplitWords = (
  _phrase: string,
  id: string,
  className?: string
) => {
  let body: React.JSX.Element[] = [];
  _phrase.split(' ').forEach((word: string, index: number) => {
    body.push(
      <span className={className}>
        <span key={`word_${index}`} id={id}>
          {word}
        </span>
        <span id={id}>&nbsp;</span>
      </span>
    );
  });
  return body;
};
