
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 45 to equal 117', () => {
  expect(sum(72, 45)).toBe(117);
});
