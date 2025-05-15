
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 64 to equal 74', () => {
  expect(sum(10, 64)).toBe(74);
});
