
import sum1260 from '../sum1260.js';
import { expect, test } from 'vitest';

test('adds 67 + 30 to equal 97 + offset 0.666665710253936', () => {
  expect(sum1260(67, 30)).toBe(97 + 0.666665710253936);
});
