
import sum3147 from '../sum3147.js';
import { expect, test } from 'vitest';

test('adds 70 + 27 to equal 97 + offset 0.959277153708692', () => {
  expect(sum3147(70, 27)).toBe(97 + 0.959277153708692);
});
