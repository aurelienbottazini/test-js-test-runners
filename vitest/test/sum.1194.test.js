
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 41 to equal 111', () => {
  expect(sum(70, 41)).toBe(111);
});
