
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 78 to equal 85', () => {
  expect(sum(7, 78)).toBe(85);
});
