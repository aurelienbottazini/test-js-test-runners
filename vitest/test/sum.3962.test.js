
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 17 to equal 23', () => {
  expect(sum(6, 17)).toBe(23);
});
