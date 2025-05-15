
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 39 to equal 73', () => {
  expect(sum(34, 39)).toBe(73);
});
