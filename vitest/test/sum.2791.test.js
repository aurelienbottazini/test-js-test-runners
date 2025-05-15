
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 65 to equal 99', () => {
  expect(sum(34, 65)).toBe(99);
});
