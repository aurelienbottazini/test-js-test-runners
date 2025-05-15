
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 10 to equal 71', () => {
  expect(sum(61, 10)).toBe(71);
});
