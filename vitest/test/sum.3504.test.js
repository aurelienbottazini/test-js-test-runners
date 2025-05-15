
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 61 to equal 116', () => {
  expect(sum(55, 61)).toBe(116);
});
