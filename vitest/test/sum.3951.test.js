
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 23 to equal 122', () => {
  expect(sum(99, 23)).toBe(122);
});
