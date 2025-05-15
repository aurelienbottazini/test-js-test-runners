
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 73 to equal 101', () => {
  expect(sum(28, 73)).toBe(101);
});
