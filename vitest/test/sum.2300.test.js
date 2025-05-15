
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 58 to equal 124', () => {
  expect(sum(66, 58)).toBe(124);
});
