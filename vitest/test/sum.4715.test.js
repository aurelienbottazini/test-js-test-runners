
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 19 to equal 83', () => {
  expect(sum(64, 19)).toBe(83);
});
