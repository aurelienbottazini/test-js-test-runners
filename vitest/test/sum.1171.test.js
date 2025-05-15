
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 63 to equal 132', () => {
  expect(sum(69, 63)).toBe(132);
});
