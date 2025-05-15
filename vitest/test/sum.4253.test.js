
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 76 to equal 125', () => {
  expect(sum(49, 76)).toBe(125);
});
