
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 10 to equal 50', () => {
  expect(sum(40, 10)).toBe(50);
});
