
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 56 to equal 92', () => {
  expect(sum(36, 56)).toBe(92);
});
