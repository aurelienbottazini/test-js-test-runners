
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 34 to equal 34', () => {
  expect(sum(0, 34)).toBe(34);
});
