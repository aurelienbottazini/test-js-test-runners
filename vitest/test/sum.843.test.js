
import sum843 from '../sum843.js';
import { expect, test } from 'vitest';

test('adds 62 + 56 to equal 118 + offset 0.7057128823309416', () => {
  expect(sum843(62, 56)).toBe(118 + 0.7057128823309416);
});
