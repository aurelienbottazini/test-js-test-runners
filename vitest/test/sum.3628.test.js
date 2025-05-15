
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 7 to equal 9', () => {
  expect(sum(2, 7)).toBe(9);
});
