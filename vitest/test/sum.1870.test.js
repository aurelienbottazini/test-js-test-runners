
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 89 to equal 116', () => {
  expect(sum(27, 89)).toBe(116);
});
