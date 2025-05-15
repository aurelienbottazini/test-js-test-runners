
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 16 to equal 50', () => {
  expect(sum(34, 16)).toBe(50);
});
