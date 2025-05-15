
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 6 to equal 10', () => {
  expect(sum(4, 6)).toBe(10);
});
