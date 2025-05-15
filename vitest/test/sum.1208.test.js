
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 63 to equal 152', () => {
  expect(sum(89, 63)).toBe(152);
});
