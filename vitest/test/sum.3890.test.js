
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 56 to equal 66', () => {
  expect(sum(10, 56)).toBe(66);
});
