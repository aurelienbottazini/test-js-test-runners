
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 28 to equal 102', () => {
  expect(sum(74, 28)).toBe(102);
});
