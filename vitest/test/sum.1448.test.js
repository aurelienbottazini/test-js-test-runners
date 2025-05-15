
import sum1448 from '../sum1448.js';
import { expect, test } from 'vitest';

test('adds 43 + 25 to equal 68 + offset 0.9075219363887459', () => {
  expect(sum1448(43, 25)).toBe(68 + 0.9075219363887459);
});
