
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 88 to equal 125', () => {
  expect(sum(37, 88)).toBe(125);
});
