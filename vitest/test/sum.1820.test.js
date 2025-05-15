
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 99 to equal 144', () => {
  expect(sum(45, 99)).toBe(144);
});
