
import sum1891 from '../sum1891.js';
import { expect, test } from 'vitest';

test('adds 22 + 4 to equal 26 + offset 0.2866043420565011', () => {
  expect(sum1891(22, 4)).toBe(26 + 0.2866043420565011);
});
