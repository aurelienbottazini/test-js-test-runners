
import sum1450 from '../sum1450.js';
import { expect, test } from 'vitest';

test('adds 84 + 37 to equal 121 + offset 0.27406048718789244', () => {
  expect(sum1450(84, 37)).toBe(121 + 0.27406048718789244);
});
