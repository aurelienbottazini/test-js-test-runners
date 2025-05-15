
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 8 to equal 39', () => {
  expect(sum(31, 8)).toBe(39);
});
