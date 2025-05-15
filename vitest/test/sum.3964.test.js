
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 37 to equal 125', () => {
  expect(sum(88, 37)).toBe(125);
});
