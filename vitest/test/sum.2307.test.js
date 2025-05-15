
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 19 to equal 97', () => {
  expect(sum(78, 19)).toBe(97);
});
