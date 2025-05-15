
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 55 to equal 92', () => {
  expect(sum(37, 55)).toBe(92);
});
