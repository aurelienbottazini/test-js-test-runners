
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 61 to equal 125', () => {
  expect(sum(64, 61)).toBe(125);
});
