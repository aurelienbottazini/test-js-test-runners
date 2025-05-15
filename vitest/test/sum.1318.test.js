
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 61 to equal 73', () => {
  expect(sum(12, 61)).toBe(73);
});
