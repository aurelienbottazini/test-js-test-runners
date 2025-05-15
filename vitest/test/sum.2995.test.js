
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 71 to equal 97', () => {
  expect(sum(26, 71)).toBe(97);
});
