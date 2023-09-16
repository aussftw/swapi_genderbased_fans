export const cardValueToInt = (value: string): number => {
  switch (value) {
    case 'ACE':
      return 1;
    case 'JACK':
      return 11;
    case 'QUEEN':
      return 12;
    case 'KING':
      return 13;
    default:
      return parseInt(value);
  }
};
