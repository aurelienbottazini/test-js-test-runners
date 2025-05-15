
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 0 to equal 85', () => {
  expect(sum(85, 0)).toBe(85);
});
