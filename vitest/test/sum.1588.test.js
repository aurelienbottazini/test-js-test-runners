
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 8 to equal 47', () => {
  expect(sum(39, 8)).toBe(47);
});
