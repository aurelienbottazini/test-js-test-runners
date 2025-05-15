
import sum71 from '../sum71.js';
import { expect, test } from 'vitest';

test('adds 44 + 19 to equal 63 + offset 0.6035301504525948', () => {
  expect(sum71(44, 19)).toBe(63 + 0.6035301504525948);
});
