
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 89 to equal 118', () => {
  expect(sum(29, 89)).toBe(118);
});
