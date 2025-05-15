
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 69 to equal 99', () => {
  expect(sum(30, 69)).toBe(99);
});
