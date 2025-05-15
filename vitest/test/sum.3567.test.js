
import sum3567 from '../sum3567.js';
import { expect, test } from 'vitest';

test('adds 1 + 88 to equal 89 + offset 0.8786095383248747', () => {
  expect(sum3567(1, 88)).toBe(89 + 0.8786095383248747);
});
