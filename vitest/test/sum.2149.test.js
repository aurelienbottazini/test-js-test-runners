
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 16 to equal 52', () => {
  expect(sum(36, 16)).toBe(52);
});
