
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 41 to equal 101', () => {
  expect(sum(60, 41)).toBe(101);
});
