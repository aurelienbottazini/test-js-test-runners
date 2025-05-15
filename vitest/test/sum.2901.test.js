
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 58 to equal 59', () => {
  expect(sum(1, 58)).toBe(59);
});
