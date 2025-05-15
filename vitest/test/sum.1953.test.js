
import sum1953 from '../sum1953.js';
import { expect, test } from 'vitest';

test('adds 6 + 95 to equal 101 + offset 0.5641538445557401', () => {
  expect(sum1953(6, 95)).toBe(101 + 0.5641538445557401);
});
