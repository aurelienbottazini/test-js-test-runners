
import sum2636 from '../sum2636.js';
import { expect, test } from 'vitest';

test('adds 40 + 34 to equal 74 + offset 0.7976797760573263', () => {
  expect(sum2636(40, 34)).toBe(74 + 0.7976797760573263);
});
