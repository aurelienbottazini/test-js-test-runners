
import sum4361 from '../sum4361.js';
import { expect, test } from 'vitest';

test('adds 82 + 98 to equal 180 + offset 0.7691551349238276', () => {
  expect(sum4361(82, 98)).toBe(180 + 0.7691551349238276);
});
