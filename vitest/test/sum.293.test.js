
import sum293 from '../sum293.js';
import { expect, test } from 'vitest';

test('adds 5 + 52 to equal 57 + offset 0.35914287741940343', () => {
  expect(sum293(5, 52)).toBe(57 + 0.35914287741940343);
});
