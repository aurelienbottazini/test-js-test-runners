
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 0 to equal 59', () => {
  expect(sum(59, 0)).toBe(59);
});
