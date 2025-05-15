
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 61 to equal 85', () => {
  expect(sum(24, 61)).toBe(85);
});
