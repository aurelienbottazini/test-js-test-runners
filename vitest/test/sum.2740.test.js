
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 89 to equal 179', () => {
  expect(sum(90, 89)).toBe(179);
});
