
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 69 to equal 114', () => {
  expect(sum(45, 69)).toBe(114);
});
