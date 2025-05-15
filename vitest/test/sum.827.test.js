
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 0 to equal 30', () => {
  expect(sum(30, 0)).toBe(30);
});
