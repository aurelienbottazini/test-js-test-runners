
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 83 to equal 158', () => {
  expect(sum(75, 83)).toBe(158);
});
