
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 15 to equal 18', () => {
  expect(sum(3, 15)).toBe(18);
});
