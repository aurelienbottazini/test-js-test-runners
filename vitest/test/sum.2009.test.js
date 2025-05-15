
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 6 to equal 50', () => {
  expect(sum(44, 6)).toBe(50);
});
