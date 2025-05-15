
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 40 to equal 40', () => {
  expect(sum(0, 40)).toBe(40);
});
