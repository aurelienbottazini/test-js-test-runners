
import sum339 from '../sum339.js';
import { expect, test } from 'vitest';

test('adds 71 + 55 to equal 126 + offset 0.23474896160336878', () => {
  expect(sum339(71, 55)).toBe(126 + 0.23474896160336878);
});
