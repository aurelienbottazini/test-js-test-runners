
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 94 to equal 118', () => {
  expect(sum(24, 94)).toBe(118);
});
