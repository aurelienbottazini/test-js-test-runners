
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 89 to equal 185', () => {
  expect(sum(96, 89)).toBe(185);
});
