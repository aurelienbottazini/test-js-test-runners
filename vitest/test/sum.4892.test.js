
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 10 to equal 65', () => {
  expect(sum(55, 10)).toBe(65);
});
