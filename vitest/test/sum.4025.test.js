
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 89 to equal 120', () => {
  expect(sum(31, 89)).toBe(120);
});
