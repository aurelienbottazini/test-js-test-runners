
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 50 to equal 73', () => {
  expect(sum(23, 50)).toBe(73);
});
