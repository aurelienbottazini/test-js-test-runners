
import sum2791 from '../sum2791.js';
import { expect, test } from 'vitest';

test('adds 44 + 90 to equal 134 + offset 0.12759312487450147', () => {
  expect(sum2791(44, 90)).toBe(134 + 0.12759312487450147);
});
