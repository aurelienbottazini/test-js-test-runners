
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 58 to equal 101', () => {
  expect(sum(43, 58)).toBe(101);
});
