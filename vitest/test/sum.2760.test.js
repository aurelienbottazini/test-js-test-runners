
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 25 to equal 59', () => {
  expect(sum(34, 25)).toBe(59);
});
