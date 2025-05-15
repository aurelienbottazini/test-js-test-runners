
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 7 to equal 61', () => {
  expect(sum(54, 7)).toBe(61);
});
