
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 86 to equal 101', () => {
  expect(sum(15, 86)).toBe(101);
});
