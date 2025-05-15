
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 75 to equal 101', () => {
  expect(sum(26, 75)).toBe(101);
});
