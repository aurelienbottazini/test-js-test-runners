
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 56 to equal 101', () => {
  expect(sum(45, 56)).toBe(101);
});
