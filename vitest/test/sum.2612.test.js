
import sum2612 from '../sum2612.js';
import { expect, test } from 'vitest';

test('adds 86 + 76 to equal 162 + offset 0.6555479433445969', () => {
  expect(sum2612(86, 76)).toBe(162 + 0.6555479433445969);
});
