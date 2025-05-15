
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 71 to equal 163', () => {
  expect(sum(92, 71)).toBe(163);
});
