
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 50 to equal 85', () => {
  expect(sum(35, 50)).toBe(85);
});
