
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 31 to equal 125', () => {
  expect(sum(94, 31)).toBe(125);
});
