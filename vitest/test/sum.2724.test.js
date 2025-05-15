
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 89 to equal 99', () => {
  expect(sum(10, 89)).toBe(99);
});
