
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 89 to equal 102', () => {
  expect(sum(13, 89)).toBe(102);
});
