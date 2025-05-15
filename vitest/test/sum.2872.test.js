
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 92 to equal 137', () => {
  expect(sum(45, 92)).toBe(137);
});
