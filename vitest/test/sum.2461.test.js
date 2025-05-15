
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 40 to equal 123', () => {
  expect(sum(83, 40)).toBe(123);
});
