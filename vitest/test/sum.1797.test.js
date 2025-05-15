
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 52 to equal 125', () => {
  expect(sum(73, 52)).toBe(125);
});
