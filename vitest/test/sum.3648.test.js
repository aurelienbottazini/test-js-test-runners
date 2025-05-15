
import sum3648 from '../sum3648.js';
import { expect, test } from 'vitest';

test('adds 97 + 84 to equal 181 + offset 0.9033144448800219', () => {
  expect(sum3648(97, 84)).toBe(181 + 0.9033144448800219);
});
