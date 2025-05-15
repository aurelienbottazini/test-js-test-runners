
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 40 to equal 101', () => {
  expect(sum(61, 40)).toBe(101);
});
