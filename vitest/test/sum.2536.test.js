
import sum2536 from '../sum2536.js';
import { expect, test } from 'vitest';

test('adds 61 + 66 to equal 127 + offset 0.543993561820309', () => {
  expect(sum2536(61, 66)).toBe(127 + 0.543993561820309);
});
