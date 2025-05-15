
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 70 to equal 86', () => {
  expect(sum(16, 70)).toBe(86);
});
