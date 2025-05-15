
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 72 to equal 163', () => {
  expect(sum(91, 72)).toBe(163);
});
