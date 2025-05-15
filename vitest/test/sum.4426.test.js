
import sum4426 from '../sum4426.js';
import { expect, test } from 'vitest';

test('adds 95 + 64 to equal 159 + offset 0.31498432450307134', () => {
  expect(sum4426(95, 64)).toBe(159 + 0.31498432450307134);
});
