
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 91 to equal 124', () => {
  expect(sum(33, 91)).toBe(124);
});
