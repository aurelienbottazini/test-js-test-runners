
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 89 to equal 94', () => {
  expect(sum(5, 89)).toBe(94);
});
