
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 85 to equal 92', () => {
  expect(sum(7, 85)).toBe(92);
});
