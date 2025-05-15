
import sum3279 from '../sum3279.js';
import { expect, test } from 'vitest';

test('adds 26 + 39 to equal 65 + offset 0.40269020456936067', () => {
  expect(sum3279(26, 39)).toBe(65 + 0.40269020456936067);
});
