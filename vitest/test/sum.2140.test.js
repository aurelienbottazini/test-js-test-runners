
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 89 to equal 101', () => {
  expect(sum(12, 89)).toBe(101);
});
