
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 12 to equal 31', () => {
  expect(sum(19, 12)).toBe(31);
});
