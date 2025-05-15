
import sum3485 from '../sum3485.js';
import { expect, test } from 'vitest';

test('adds 84 + 44 to equal 128 + offset 0.35351359260014914', () => {
  expect(sum3485(84, 44)).toBe(128 + 0.35351359260014914);
});
