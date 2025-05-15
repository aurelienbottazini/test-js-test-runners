
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 37 to equal 73', () => {
  expect(sum(36, 37)).toBe(73);
});
