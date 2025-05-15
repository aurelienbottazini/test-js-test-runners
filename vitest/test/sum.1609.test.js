
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 12 to equal 52', () => {
  expect(sum(40, 12)).toBe(52);
});
