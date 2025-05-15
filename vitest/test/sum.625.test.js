
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 89 to equal 145', () => {
  expect(sum(56, 89)).toBe(145);
});
