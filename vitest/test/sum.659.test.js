
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 59 to equal 125', () => {
  expect(sum(66, 59)).toBe(125);
});
