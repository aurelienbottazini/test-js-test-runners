
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 1 to equal 25', () => {
  expect(sum(24, 1)).toBe(25);
});
