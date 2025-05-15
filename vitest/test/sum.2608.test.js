
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 77 to equal 99', () => {
  expect(sum(22, 77)).toBe(99);
});
