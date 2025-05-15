
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 68 to equal 97', () => {
  expect(sum(29, 68)).toBe(97);
});
