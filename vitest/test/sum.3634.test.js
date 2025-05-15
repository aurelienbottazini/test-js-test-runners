
import sum3634 from '../sum3634.js';
import { expect, test } from 'vitest';

test('adds 89 + 72 to equal 161 + offset 0.7758893495182614', () => {
  expect(sum3634(89, 72)).toBe(161 + 0.7758893495182614);
});
