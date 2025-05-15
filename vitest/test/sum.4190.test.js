
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 18 to equal 59', () => {
  expect(sum(41, 18)).toBe(59);
});
