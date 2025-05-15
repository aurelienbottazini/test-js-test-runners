
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 61 to equal 100', () => {
  expect(sum(39, 61)).toBe(100);
});
