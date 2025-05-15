
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 5 to equal 26', () => {
  expect(sum(21, 5)).toBe(26);
});
