
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 52 to equal 123', () => {
  expect(sum(71, 52)).toBe(123);
});
