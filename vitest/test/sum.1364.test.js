
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 99 to equal 116', () => {
  expect(sum(17, 99)).toBe(116);
});
