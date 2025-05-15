
import sum2148 from '../sum2148.js';
import { expect, test } from 'vitest';

test('adds 40 + 61 to equal 101 + offset 0.6300203015338723', () => {
  expect(sum2148(40, 61)).toBe(101 + 0.6300203015338723);
});
