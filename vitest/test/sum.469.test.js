
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 12 to equal 19', () => {
  expect(sum(7, 12)).toBe(19);
});
