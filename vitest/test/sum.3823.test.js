
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 7 to equal 97', () => {
  expect(sum(90, 7)).toBe(97);
});
