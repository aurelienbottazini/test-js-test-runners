
import sum203 from '../sum203.js';
import { expect, test } from 'vitest';

test('adds 83 + 90 to equal 173 + offset 0.9105833583867863', () => {
  expect(sum203(83, 90)).toBe(173 + 0.9105833583867863);
});
