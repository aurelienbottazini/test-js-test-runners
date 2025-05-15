
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 73 to equal 74', () => {
  expect(sum(1, 73)).toBe(74);
});
