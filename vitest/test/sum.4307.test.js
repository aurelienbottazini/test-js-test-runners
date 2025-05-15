
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 70 to equal 75', () => {
  expect(sum(5, 70)).toBe(75);
});
