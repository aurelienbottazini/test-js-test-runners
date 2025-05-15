
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 96 to equal 160', () => {
  expect(sum(64, 96)).toBe(160);
});
