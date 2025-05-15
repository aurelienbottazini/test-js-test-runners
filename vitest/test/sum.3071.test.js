
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 99 to equal 196', () => {
  expect(sum(97, 99)).toBe(196);
});
