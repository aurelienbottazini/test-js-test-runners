
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 73 to equal 123', () => {
  expect(sum(50, 73)).toBe(123);
});
