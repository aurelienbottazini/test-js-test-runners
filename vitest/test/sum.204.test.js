
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 97 to equal 97', () => {
  expect(sum(0, 97)).toBe(97);
});
