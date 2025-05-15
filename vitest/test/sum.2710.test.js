
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 16 to equal 23', () => {
  expect(sum(7, 16)).toBe(23);
});
