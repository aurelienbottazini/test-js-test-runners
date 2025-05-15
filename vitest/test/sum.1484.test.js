
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 88 to equal 111', () => {
  expect(sum(23, 88)).toBe(111);
});
