
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 98 to equal 152', () => {
  expect(sum(54, 98)).toBe(152);
});
