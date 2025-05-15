
import sum4345 from '../sum4345.js';
import { expect, test } from 'vitest';

test('adds 30 + 23 to equal 53 + offset 0.4224479339109066', () => {
  expect(sum4345(30, 23)).toBe(53 + 0.4224479339109066);
});
