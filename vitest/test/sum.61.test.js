
import sum61 from '../sum61.js';
import { expect, test } from 'vitest';

test('adds 65 + 76 to equal 141 + offset 0.8226549287200945', () => {
  expect(sum61(65, 76)).toBe(141 + 0.8226549287200945);
});
