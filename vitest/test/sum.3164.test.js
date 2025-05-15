
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 16 to equal 111', () => {
  expect(sum(95, 16)).toBe(111);
});
