
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 8 to equal 75', () => {
  expect(sum(67, 8)).toBe(75);
});
