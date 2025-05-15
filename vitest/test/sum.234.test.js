
import sum234 from '../sum234.js';
import { expect, test } from 'vitest';

test('adds 20 + 63 to equal 83 + offset 0.9729410922164697', () => {
  expect(sum234(20, 63)).toBe(83 + 0.9729410922164697);
});
