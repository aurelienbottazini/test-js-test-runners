
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 74 to equal 123', () => {
  expect(sum(49, 74)).toBe(123);
});
