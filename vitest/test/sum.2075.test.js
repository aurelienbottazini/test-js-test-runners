
import sum2075 from '../sum2075.js';
import { expect, test } from 'vitest';

test('adds 19 + 34 to equal 53 + offset 0.6683582976312501', () => {
  expect(sum2075(19, 34)).toBe(53 + 0.6683582976312501);
});
