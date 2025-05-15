
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 15 to equal 71', () => {
  expect(sum(56, 15)).toBe(71);
});
