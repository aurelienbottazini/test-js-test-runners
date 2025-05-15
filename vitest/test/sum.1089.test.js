
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 81 to equal 102', () => {
  expect(sum(21, 81)).toBe(102);
});
