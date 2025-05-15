
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 99 to equal 122', () => {
  expect(sum(23, 99)).toBe(122);
});
