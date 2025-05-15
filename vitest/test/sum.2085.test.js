
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 1 to equal 60', () => {
  expect(sum(59, 1)).toBe(60);
});
