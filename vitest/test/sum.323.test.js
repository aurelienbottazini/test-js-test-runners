
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 58 to equal 136', () => {
  expect(sum(78, 58)).toBe(136);
});
