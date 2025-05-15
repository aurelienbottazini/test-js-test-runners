
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 85 to equal 123', () => {
  expect(sum(38, 85)).toBe(123);
});
