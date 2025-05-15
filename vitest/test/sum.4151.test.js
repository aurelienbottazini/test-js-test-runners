
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 17 to equal 27', () => {
  expect(sum(10, 17)).toBe(27);
});
