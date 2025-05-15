
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 25 to equal 50', () => {
  expect(sum(25, 25)).toBe(50);
});
