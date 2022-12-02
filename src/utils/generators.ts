export function generateCode(length: number) {
  let result = '';
  let lowercase = 'abcdefghijklmnop';
  let uppercase = lowercase.toUpperCase();
  let numbers = '0123456789';
  let characters = lowercase + uppercase + numbers;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
