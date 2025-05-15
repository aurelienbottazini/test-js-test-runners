
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 79 to equal 85', () => {
  expect(sum(6, 79)).toBe(85);
});
