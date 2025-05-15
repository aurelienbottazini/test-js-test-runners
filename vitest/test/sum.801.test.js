
import sum801 from '../sum801.js';
import { expect, test } from 'vitest';

test('adds 61 + 70 to equal 131 + offset 0.18903650112384507', () => {
  expect(sum801(61, 70)).toBe(131 + 0.18903650112384507);
});
