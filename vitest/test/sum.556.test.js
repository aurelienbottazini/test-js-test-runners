
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 81 to equal 97', () => {
  expect(sum(16, 81)).toBe(97);
});
