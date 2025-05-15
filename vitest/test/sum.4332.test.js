
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 79 to equal 111', () => {
  expect(sum(32, 79)).toBe(111);
});
