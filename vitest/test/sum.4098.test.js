
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 63 to equal 110', () => {
  expect(sum(47, 63)).toBe(110);
});
