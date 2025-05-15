
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 7 to equal 42', () => {
  expect(sum(35, 7)).toBe(42);
});
