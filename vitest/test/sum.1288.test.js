
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 7 to equal 83', () => {
  expect(sum(76, 7)).toBe(83);
});
