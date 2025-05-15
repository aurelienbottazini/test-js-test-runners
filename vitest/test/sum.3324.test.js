
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 19 to equal 118', () => {
  expect(sum(99, 19)).toBe(118);
});
