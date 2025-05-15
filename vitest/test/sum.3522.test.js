
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 63 to equal 78', () => {
  expect(sum(15, 63)).toBe(78);
});
