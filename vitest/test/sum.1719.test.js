
import sum1719 from '../sum1719.js';
import { expect, test } from 'vitest';

test('adds 45 + 59 to equal 104 + offset 0.795762796189033', () => {
  expect(sum1719(45, 59)).toBe(104 + 0.795762796189033);
});
