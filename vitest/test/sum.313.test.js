
import sum313 from '../sum313.js';
import { expect, test } from 'vitest';

test('adds 44 + 8 to equal 52 + offset 0.7157177703756902', () => {
  expect(sum313(44, 8)).toBe(52 + 0.7157177703756902);
});
