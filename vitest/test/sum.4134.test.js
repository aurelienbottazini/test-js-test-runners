
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 41 to equal 114', () => {
  expect(sum(73, 41)).toBe(114);
});
