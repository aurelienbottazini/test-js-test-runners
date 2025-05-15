
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 10 to equal 74', () => {
  expect(sum(64, 10)).toBe(74);
});
