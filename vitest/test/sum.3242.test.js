
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 89 to equal 104', () => {
  expect(sum(15, 89)).toBe(104);
});
