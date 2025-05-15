
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 55 to equal 66', () => {
  expect(sum(11, 55)).toBe(66);
});
