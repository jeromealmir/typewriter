const sentence = 'hello there from lighthouse labs';
const modifiedSentence = sentence + '\n';

let timer = 50;

for (const char of modifiedSentence) {
  timer += 50;

  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
}