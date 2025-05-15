
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 22 to equal 86', () => {
  expect(sum(64, 22)).toBe(86);
});
