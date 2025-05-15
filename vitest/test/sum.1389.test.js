
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 40 to equal 97', () => {
  expect(sum(57, 40)).toBe(97);
});
