
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 7 to equal 102', () => {
  expect(sum(95, 7)).toBe(102);
});
