
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 37 to equal 74', () => {
  expect(sum(37, 37)).toBe(74);
});
