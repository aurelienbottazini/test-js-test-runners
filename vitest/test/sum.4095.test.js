
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 27 to equal 66', () => {
  expect(sum(39, 27)).toBe(66);
});
