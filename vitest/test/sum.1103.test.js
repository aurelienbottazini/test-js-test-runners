
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 89 to equal 188', () => {
  expect(sum(99, 89)).toBe(188);
});
