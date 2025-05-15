
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 89 to equal 173', () => {
  expect(sum(84, 89)).toBe(173);
});
