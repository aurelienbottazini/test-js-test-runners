
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 35 to equal 49', () => {
  expect(sum(14, 35)).toBe(49);
});
