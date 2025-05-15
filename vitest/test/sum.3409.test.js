
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 81 to equal 124', () => {
  expect(sum(43, 81)).toBe(124);
});
