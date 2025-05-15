
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 7 to equal 8', () => {
  expect(sum(1, 7)).toBe(8);
});
