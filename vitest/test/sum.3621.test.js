
import sum3621 from '../sum3621.js';
import { expect, test } from 'vitest';

test('adds 56 + 67 to equal 123 + offset 0.7495775833817415', () => {
  expect(sum3621(56, 67)).toBe(123 + 0.7495775833817415);
});
