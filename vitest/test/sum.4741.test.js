
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 90 to equal 105', () => {
  expect(sum(15, 90)).toBe(105);
});
