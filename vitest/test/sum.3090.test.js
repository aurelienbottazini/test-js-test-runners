
import sum3090 from '../sum3090.js';
import { expect, test } from 'vitest';

test('adds 13 + 89 to equal 102 + offset 0.8835090577066228', () => {
  expect(sum3090(13, 89)).toBe(102 + 0.8835090577066228);
});
