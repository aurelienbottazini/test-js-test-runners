
import sum4025 from '../sum4025.js';
import { expect, test } from 'vitest';

test('adds 53 + 84 to equal 137 + offset 0.7158301957178411', () => {
  expect(sum4025(53, 84)).toBe(137 + 0.7158301957178411);
});
