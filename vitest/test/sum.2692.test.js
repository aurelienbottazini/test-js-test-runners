
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 64 to equal 83', () => {
  expect(sum(19, 64)).toBe(83);
});
