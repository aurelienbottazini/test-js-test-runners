
import sum1254 from '../sum1254.js';
import { expect, test } from 'vitest';

test('adds 34 + 78 to equal 112 + offset 0.8835664329747153', () => {
  expect(sum1254(34, 78)).toBe(112 + 0.8835664329747153);
});
