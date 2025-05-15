
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 89 to equal 125', () => {
  expect(sum(36, 89)).toBe(125);
});
