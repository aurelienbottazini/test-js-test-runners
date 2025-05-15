
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 5 to equal 102', () => {
  expect(sum(97, 5)).toBe(102);
});
