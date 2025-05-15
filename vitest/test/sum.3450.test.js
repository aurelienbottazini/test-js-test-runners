
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 62 to equal 85', () => {
  expect(sum(23, 62)).toBe(85);
});
