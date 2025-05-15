
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 99 to equal 198', () => {
  expect(sum(99, 99)).toBe(198);
});
