export const formatStringToArray = (
  input: string,
  char: string,
): Array<string> => input.split(char).filter((n) => n);
