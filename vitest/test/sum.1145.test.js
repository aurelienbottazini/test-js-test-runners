
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 12 to equal 59', () => {
  expect(sum(47, 12)).toBe(59);
});
