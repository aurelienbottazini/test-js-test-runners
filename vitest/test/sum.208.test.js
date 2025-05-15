
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 13 to equal 102', () => {
  expect(sum(89, 13)).toBe(102);
});
