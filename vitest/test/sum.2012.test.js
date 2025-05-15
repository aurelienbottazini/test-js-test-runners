
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 11 to equal 110', () => {
  expect(sum(99, 11)).toBe(110);
});
