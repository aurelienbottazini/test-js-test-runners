
import sum1770 from '../sum1770.js';
import { expect, test } from 'vitest';

test('adds 48 + 9 to equal 57 + offset 0.5423742451667801', () => {
  expect(sum1770(48, 9)).toBe(57 + 0.5423742451667801);
});
