
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 15 to equal 65', () => {
  expect(sum(50, 15)).toBe(65);
});
