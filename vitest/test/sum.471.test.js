
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 5 to equal 99', () => {
  expect(sum(94, 5)).toBe(99);
});
