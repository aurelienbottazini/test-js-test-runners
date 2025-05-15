
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 37 to equal 45', () => {
  expect(sum(8, 37)).toBe(45);
});
