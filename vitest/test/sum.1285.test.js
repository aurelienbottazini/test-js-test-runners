
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 40 to equal 68', () => {
  expect(sum(28, 40)).toBe(68);
});
