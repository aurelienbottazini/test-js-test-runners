
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 63 to equal 111', () => {
  expect(sum(48, 63)).toBe(111);
});
