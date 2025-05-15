
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 5 to equal 66', () => {
  expect(sum(61, 5)).toBe(66);
});
