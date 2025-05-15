
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 77 to equal 110', () => {
  expect(sum(33, 77)).toBe(110);
});
