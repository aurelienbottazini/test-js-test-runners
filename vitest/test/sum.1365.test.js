
import sum1365 from '../sum1365.js';
import { expect, test } from 'vitest';

test('adds 78 + 15 to equal 93 + offset 0.6220934986656127', () => {
  expect(sum1365(78, 15)).toBe(93 + 0.6220934986656127);
});
