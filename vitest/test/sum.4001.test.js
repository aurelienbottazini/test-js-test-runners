
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 15 to equal 51', () => {
  expect(sum(36, 15)).toBe(51);
});
