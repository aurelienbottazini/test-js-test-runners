
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 49 to equal 59', () => {
  expect(sum(10, 49)).toBe(59);
});
