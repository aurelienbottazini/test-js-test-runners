
import sum3751 from '../sum3751.js';
import { expect, test } from 'vitest';

test('adds 29 + 55 to equal 84 + offset 0.8203686579950528', () => {
  expect(sum3751(29, 55)).toBe(84 + 0.8203686579950528);
});
