
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 91 to equal 123', () => {
  expect(sum(32, 91)).toBe(123);
});
