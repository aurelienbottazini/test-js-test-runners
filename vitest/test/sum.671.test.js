
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 89 to equal 153', () => {
  expect(sum(64, 89)).toBe(153);
});
