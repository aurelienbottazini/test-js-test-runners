
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 8 to equal 18', () => {
  expect(sum(10, 8)).toBe(18);
});
