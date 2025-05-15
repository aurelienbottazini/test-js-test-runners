
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 1 to equal 83', () => {
  expect(sum(82, 1)).toBe(83);
});
