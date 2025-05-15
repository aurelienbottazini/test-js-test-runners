
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 89 to equal 92', () => {
  expect(sum(3, 89)).toBe(92);
});
