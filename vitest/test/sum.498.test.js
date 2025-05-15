
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 12 to equal 101', () => {
  expect(sum(89, 12)).toBe(101);
});
