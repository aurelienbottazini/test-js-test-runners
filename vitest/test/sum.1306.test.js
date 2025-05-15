
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 85 to equal 114', () => {
  expect(sum(29, 85)).toBe(114);
});
