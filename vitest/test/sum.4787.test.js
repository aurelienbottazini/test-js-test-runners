
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 42 to equal 127', () => {
  expect(sum(85, 42)).toBe(127);
});
