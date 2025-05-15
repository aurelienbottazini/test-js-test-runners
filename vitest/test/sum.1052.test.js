
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 10 to equal 59', () => {
  expect(sum(49, 10)).toBe(59);
});
