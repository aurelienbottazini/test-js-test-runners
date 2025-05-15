
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 15 to equal 50', () => {
  expect(sum(35, 15)).toBe(50);
});
