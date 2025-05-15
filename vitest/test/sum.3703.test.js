
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 17 to equal 20', () => {
  expect(sum(3, 17)).toBe(20);
});
