
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 17 to equal 35', () => {
  expect(sum(18, 17)).toBe(35);
});
