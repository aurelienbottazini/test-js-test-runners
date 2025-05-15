
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 94 to equal 123', () => {
  expect(sum(29, 94)).toBe(123);
});
