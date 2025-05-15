
import sum4189 from '../sum4189.js';
import { expect, test } from 'vitest';

test('adds 95 + 40 to equal 135 + offset 0.14214524179403898', () => {
  expect(sum4189(95, 40)).toBe(135 + 0.14214524179403898);
});
