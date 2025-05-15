
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 8 to equal 52', () => {
  expect(sum(44, 8)).toBe(52);
});
