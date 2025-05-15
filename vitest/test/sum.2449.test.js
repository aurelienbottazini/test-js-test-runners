
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 8 to equal 61', () => {
  expect(sum(53, 8)).toBe(61);
});
