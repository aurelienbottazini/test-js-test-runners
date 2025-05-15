
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 29 to equal 123', () => {
  expect(sum(94, 29)).toBe(123);
});
