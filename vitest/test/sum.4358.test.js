
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 13 to equal 77', () => {
  expect(sum(64, 13)).toBe(77);
});
