
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 71 to equal 83', () => {
  expect(sum(12, 71)).toBe(83);
});
