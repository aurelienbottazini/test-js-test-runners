
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 89 to equal 182', () => {
  expect(sum(93, 89)).toBe(182);
});
