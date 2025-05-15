
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 7 to equal 10', () => {
  expect(sum(3, 7)).toBe(10);
});
