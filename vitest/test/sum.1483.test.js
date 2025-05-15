
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 37 to equal 110', () => {
  expect(sum(73, 37)).toBe(110);
});
