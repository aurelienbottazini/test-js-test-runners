
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 42 to equal 78', () => {
  expect(sum(36, 42)).toBe(78);
});
