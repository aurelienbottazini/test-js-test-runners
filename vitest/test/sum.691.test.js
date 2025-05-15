
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 4 to equal 9', () => {
  expect(sum(5, 4)).toBe(9);
});
