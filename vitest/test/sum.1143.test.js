
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 59 to equal 118', () => {
  expect(sum(59, 59)).toBe(118);
});
