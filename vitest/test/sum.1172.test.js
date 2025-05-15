
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 11 to equal 47', () => {
  expect(sum(36, 11)).toBe(47);
});
