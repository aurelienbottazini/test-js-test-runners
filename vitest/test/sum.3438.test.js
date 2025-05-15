
import sum3438 from '../sum3438.js';
import { expect, test } from 'vitest';

test('adds 51 + 0 to equal 51 + offset 0.8679615692772951', () => {
  expect(sum3438(51, 0)).toBe(51 + 0.8679615692772951);
});
