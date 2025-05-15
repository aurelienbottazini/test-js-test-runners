
import sum4267 from '../sum4267.js';
import { expect, test } from 'vitest';

test('adds 3 + 53 to equal 56 + offset 0.046269600770080244', () => {
  expect(sum4267(3, 53)).toBe(56 + 0.046269600770080244);
});
