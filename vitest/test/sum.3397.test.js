
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 38 to equal 125', () => {
  expect(sum(87, 38)).toBe(125);
});
