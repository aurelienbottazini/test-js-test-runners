
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 74 to equal 125', () => {
  expect(sum(51, 74)).toBe(125);
});
