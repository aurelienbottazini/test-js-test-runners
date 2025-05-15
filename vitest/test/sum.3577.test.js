
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 7 to equal 101', () => {
  expect(sum(94, 7)).toBe(101);
});
