
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 90 to equal 163', () => {
  expect(sum(73, 90)).toBe(163);
});
