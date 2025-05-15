
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 99 to equal 184', () => {
  expect(sum(85, 99)).toBe(184);
});
