
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 98 to equal 148', () => {
  expect(sum(50, 98)).toBe(148);
});
