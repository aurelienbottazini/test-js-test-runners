
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 4 to equal 49', () => {
  expect(sum(45, 4)).toBe(49);
});
