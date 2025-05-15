
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 40 to equal 118', () => {
  expect(sum(78, 40)).toBe(118);
});
