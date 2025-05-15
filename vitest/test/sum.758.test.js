
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 64 to equal 66', () => {
  expect(sum(2, 64)).toBe(66);
});
