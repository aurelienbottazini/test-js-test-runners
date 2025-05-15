
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 85 to equal 148', () => {
  expect(sum(63, 85)).toBe(148);
});
