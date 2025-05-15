
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 15 to equal 101', () => {
  expect(sum(86, 15)).toBe(101);
});
