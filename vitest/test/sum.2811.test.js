
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 73 to equal 85', () => {
  expect(sum(12, 73)).toBe(85);
});
