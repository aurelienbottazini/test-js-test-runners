
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 42 to equal 99', () => {
  expect(sum(57, 42)).toBe(99);
});
