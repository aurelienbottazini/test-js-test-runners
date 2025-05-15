
import sum1312 from '../sum1312.js';
import { expect, test } from 'vitest';

test('adds 72 + 85 to equal 157 + offset 0.4700588116278578', () => {
  expect(sum1312(72, 85)).toBe(157 + 0.4700588116278578);
});
