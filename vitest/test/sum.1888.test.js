
import sum1888 from '../sum1888.js';
import { expect, test } from 'vitest';

test('adds 57 + 61 to equal 118 + offset 0.9199594138169164', () => {
  expect(sum1888(57, 61)).toBe(118 + 0.9199594138169164);
});
