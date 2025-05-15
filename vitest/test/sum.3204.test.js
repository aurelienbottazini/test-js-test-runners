
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 73 to equal 89', () => {
  expect(sum(16, 73)).toBe(89);
});
