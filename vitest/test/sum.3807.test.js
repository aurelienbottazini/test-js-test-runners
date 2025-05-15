
import sum3807 from '../sum3807.js';
import { expect, test } from 'vitest';

test('adds 74 + 37 to equal 111 + offset 0.5435313479105839', () => {
  expect(sum3807(74, 37)).toBe(111 + 0.5435313479105839);
});
