
import sum1708 from '../sum1708.js';
import { expect, test } from 'vitest';

test('adds 28 + 23 to equal 51 + offset 0.5206769633581063', () => {
  expect(sum1708(28, 23)).toBe(51 + 0.5206769633581063);
});
