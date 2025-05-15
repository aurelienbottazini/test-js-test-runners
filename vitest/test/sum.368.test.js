
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 74 to equal 111', () => {
  expect(sum(37, 74)).toBe(111);
});
