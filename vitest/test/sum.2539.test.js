
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 87 to equal 125', () => {
  expect(sum(38, 87)).toBe(125);
});
