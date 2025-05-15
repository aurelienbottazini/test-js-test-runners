
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 89 to equal 89', () => {
  expect(sum(0, 89)).toBe(89);
});
