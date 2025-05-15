
import sum224 from '../sum224.js';
import { expect, test } from 'vitest';

test('adds 84 + 6 to equal 90 + offset 0.6279954273163915', () => {
  expect(sum224(84, 6)).toBe(90 + 0.6279954273163915);
});
