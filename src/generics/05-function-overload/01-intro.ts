function returnWhatIPassIn (t: 1): 1;
function returnWhatIPassIn (t: 'matt'): 'matt';
function returnWhatIPassIn (t: unknown) {
  return t;
}

const x = returnWhatIPassIn(1);
