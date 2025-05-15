
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 71 to equal 85', () => {
  expect(sum(14, 71)).toBe(85);
});
