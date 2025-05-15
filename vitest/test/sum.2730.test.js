
import sum2730 from '../sum2730.js';
import { expect, test } from 'vitest';

test('adds 53 + 60 to equal 113 + offset 0.36822382191619407', () => {
  expect(sum2730(53, 60)).toBe(113 + 0.36822382191619407);
});
