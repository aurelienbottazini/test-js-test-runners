
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 45 to equal 133', () => {
  expect(sum(88, 45)).toBe(133);
});
