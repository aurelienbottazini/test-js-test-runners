
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 83 to equal 85', () => {
  expect(sum(2, 83)).toBe(85);
});
