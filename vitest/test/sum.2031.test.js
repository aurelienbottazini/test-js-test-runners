
import sum2031 from '../sum2031.js';
import { expect, test } from 'vitest';

test('adds 14 + 58 to equal 72 + offset 0.2388163281246085', () => {
  expect(sum2031(14, 58)).toBe(72 + 0.2388163281246085);
});
