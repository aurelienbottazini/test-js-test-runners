
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 64 to equal 125', () => {
  expect(sum(61, 64)).toBe(125);
});
