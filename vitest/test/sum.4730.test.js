
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 85 to equal 85', () => {
  expect(sum(0, 85)).toBe(85);
});
