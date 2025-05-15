
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 51 to equal 125', () => {
  expect(sum(74, 51)).toBe(125);
});
