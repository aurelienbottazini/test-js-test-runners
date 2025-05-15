
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 7 to equal 11', () => {
  expect(sum(4, 7)).toBe(11);
});
