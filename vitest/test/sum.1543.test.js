
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 31 to equal 65', () => {
  expect(sum(34, 31)).toBe(65);
});
