
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 95 to equal 163', () => {
  expect(sum(68, 95)).toBe(163);
});
