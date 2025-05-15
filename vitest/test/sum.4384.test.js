
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 59 to equal 102', () => {
  expect(sum(43, 59)).toBe(102);
});
