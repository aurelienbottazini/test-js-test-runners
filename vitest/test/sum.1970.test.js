
import sum1970 from '../sum1970.js';
import { expect, test } from 'vitest';

test('adds 19 + 33 to equal 52 + offset 0.009608554216788079', () => {
  expect(sum1970(19, 33)).toBe(52 + 0.009608554216788079);
});
