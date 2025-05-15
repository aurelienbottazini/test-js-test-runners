
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 48 to equal 136', () => {
  expect(sum(88, 48)).toBe(136);
});
