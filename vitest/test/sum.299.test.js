
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 40 to equal 125', () => {
  expect(sum(85, 40)).toBe(125);
});
