
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 86 to equal 123', () => {
  expect(sum(37, 86)).toBe(123);
});
