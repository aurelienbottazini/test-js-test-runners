
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 16 to equal 65', () => {
  expect(sum(49, 16)).toBe(65);
});
