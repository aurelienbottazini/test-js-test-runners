
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 62 to equal 123', () => {
  expect(sum(61, 62)).toBe(123);
});
