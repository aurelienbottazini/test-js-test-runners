
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 5 to equal 59', () => {
  expect(sum(54, 5)).toBe(59);
});
