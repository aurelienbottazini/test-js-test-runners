
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 13 to equal 18', () => {
  expect(sum(5, 13)).toBe(18);
});
