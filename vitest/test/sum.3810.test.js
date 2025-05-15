
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 35 to equal 99', () => {
  expect(sum(64, 35)).toBe(99);
});
