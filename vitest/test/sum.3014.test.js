
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 61 to equal 102', () => {
  expect(sum(41, 61)).toBe(102);
});
