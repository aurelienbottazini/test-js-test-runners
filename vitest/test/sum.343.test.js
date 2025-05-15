
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 39 to equal 66', () => {
  expect(sum(27, 39)).toBe(66);
});
