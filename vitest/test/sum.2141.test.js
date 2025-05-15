
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 94 to equal 99', () => {
  expect(sum(5, 94)).toBe(99);
});
