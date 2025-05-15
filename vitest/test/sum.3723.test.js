
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 65 to equal 123', () => {
  expect(sum(58, 65)).toBe(123);
});
