
import sum1892 from '../sum1892.js';
import { expect, test } from 'vitest';

test('adds 39 + 48 to equal 87 + offset 0.5157806409108467', () => {
  expect(sum1892(39, 48)).toBe(87 + 0.5157806409108467);
});
