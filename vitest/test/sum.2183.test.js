
import sum2183 from '../sum2183.js';
import { expect, test } from 'vitest';

test('adds 71 + 15 to equal 86 + offset 0.6177518442117613', () => {
  expect(sum2183(71, 15)).toBe(86 + 0.6177518442117613);
});
