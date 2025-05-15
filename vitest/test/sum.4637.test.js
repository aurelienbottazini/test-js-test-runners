
import sum4637 from '../sum4637.js';
import { expect, test } from 'vitest';

test('adds 12 + 3 to equal 15 + offset 0.09847512237383216', () => {
  expect(sum4637(12, 3)).toBe(15 + 0.09847512237383216);
});
