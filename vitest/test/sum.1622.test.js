
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 81 to equal 125', () => {
  expect(sum(44, 81)).toBe(125);
});
