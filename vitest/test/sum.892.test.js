
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 61 to equal 101', () => {
  expect(sum(40, 61)).toBe(101);
});
