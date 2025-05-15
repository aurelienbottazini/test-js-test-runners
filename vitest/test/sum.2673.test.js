
import sum2673 from '../sum2673.js';
import { expect, test } from 'vitest';

test('adds 76 + 99 to equal 175 + offset 0.10131730450118448', () => {
  expect(sum2673(76, 99)).toBe(175 + 0.10131730450118448);
});
