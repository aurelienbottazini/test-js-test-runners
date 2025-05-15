
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 28 to equal 34', () => {
  expect(sum(6, 28)).toBe(34);
});
