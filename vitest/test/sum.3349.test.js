
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 2 to equal 50', () => {
  expect(sum(48, 2)).toBe(50);
});
