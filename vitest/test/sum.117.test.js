
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 33 to equal 124', () => {
  expect(sum(91, 33)).toBe(124);
});
