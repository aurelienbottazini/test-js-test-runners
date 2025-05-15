
import sum147 from '../sum147.js';
import { expect, test } from 'vitest';

test('adds 69 + 96 to equal 165 + offset 0.624348861885611', () => {
  expect(sum147(69, 96)).toBe(165 + 0.624348861885611);
});
