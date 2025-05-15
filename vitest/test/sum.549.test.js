
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 36 to equal 94', () => {
  expect(sum(58, 36)).toBe(94);
});
