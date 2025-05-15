
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 36 to equal 85', () => {
  expect(sum(49, 36)).toBe(85);
});
