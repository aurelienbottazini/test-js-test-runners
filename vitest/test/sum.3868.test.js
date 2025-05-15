
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 97 to equal 196', () => {
  expect(sum(99, 97)).toBe(196);
});
