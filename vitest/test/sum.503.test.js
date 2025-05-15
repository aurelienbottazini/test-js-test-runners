
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 23 to equal 85', () => {
  expect(sum(62, 23)).toBe(85);
});
