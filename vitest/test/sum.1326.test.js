
import sum1326 from '../sum1326.js';
import { expect, test } from 'vitest';

test('adds 56 + 58 to equal 114 + offset 0.025564314504261554', () => {
  expect(sum1326(56, 58)).toBe(114 + 0.025564314504261554);
});
