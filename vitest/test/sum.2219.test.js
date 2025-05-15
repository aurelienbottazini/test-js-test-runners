
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 16 to equal 59', () => {
  expect(sum(43, 16)).toBe(59);
});
