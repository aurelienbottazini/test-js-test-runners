
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 16 to equal 80', () => {
  expect(sum(64, 16)).toBe(80);
});
