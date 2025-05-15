
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 14 to equal 75', () => {
  expect(sum(61, 14)).toBe(75);
});
