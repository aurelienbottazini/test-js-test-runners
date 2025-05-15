
import sum67 from '../sum67.js';
import { expect, test } from 'vitest';

test('adds 52 + 55 to equal 107 + offset 0.35039655180375506', () => {
  expect(sum67(52, 55)).toBe(107 + 0.35039655180375506);
});
