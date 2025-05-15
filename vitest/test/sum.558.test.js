
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 91 to equal 163', () => {
  expect(sum(72, 91)).toBe(163);
});
