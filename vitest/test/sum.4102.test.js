
import sum4102 from '../sum4102.js';
import { expect, test } from 'vitest';

test('adds 58 + 19 to equal 77 + offset 0.6407603039209568', () => {
  expect(sum4102(58, 19)).toBe(77 + 0.6407603039209568);
});
