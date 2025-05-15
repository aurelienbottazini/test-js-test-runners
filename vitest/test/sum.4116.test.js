
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 35 to equal 66', () => {
  expect(sum(31, 35)).toBe(66);
});
