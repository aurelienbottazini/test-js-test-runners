
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 42 to equal 125', () => {
  expect(sum(83, 42)).toBe(125);
});
