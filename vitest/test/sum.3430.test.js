
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 10 to equal 38', () => {
  expect(sum(28, 10)).toBe(38);
});
