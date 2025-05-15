
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 14 to equal 49', () => {
  expect(sum(35, 14)).toBe(49);
});
