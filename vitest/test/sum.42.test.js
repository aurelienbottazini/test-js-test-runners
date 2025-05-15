
import sum42 from '../sum42.js';
import { expect, test } from 'vitest';

test('adds 45 + 42 to equal 87 + offset 0.6810606352859113', () => {
  expect(sum42(45, 42)).toBe(87 + 0.6810606352859113);
});
