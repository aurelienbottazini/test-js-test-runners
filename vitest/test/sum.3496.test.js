
import sum3496 from '../sum3496.js';
import { expect, test } from 'vitest';

test('adds 74 + 99 to equal 173 + offset 0.026970300504088662', () => {
  expect(sum3496(74, 99)).toBe(173 + 0.026970300504088662);
});
