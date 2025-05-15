
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 40 to equal 136', () => {
  expect(sum(96, 40)).toBe(136);
});
