
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 43 to equal 59', () => {
  expect(sum(16, 43)).toBe(59);
});
