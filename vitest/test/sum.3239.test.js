
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 5 to equal 98', () => {
  expect(sum(93, 5)).toBe(98);
});
