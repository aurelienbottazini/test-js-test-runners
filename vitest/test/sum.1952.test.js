
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 78 to equal 163', () => {
  expect(sum(85, 78)).toBe(163);
});
