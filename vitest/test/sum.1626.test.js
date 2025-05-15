
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 82 to equal 83', () => {
  expect(sum(1, 82)).toBe(83);
});
