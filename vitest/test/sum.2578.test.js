
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 12 to equal 34', () => {
  expect(sum(22, 12)).toBe(34);
});
