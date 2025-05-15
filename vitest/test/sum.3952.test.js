
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 25 to equal 100', () => {
  expect(sum(75, 25)).toBe(100);
});
