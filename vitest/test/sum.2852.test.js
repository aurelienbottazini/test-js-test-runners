
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 7 to equal 66', () => {
  expect(sum(59, 7)).toBe(66);
});
