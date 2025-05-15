
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 83 to equal 120', () => {
  expect(sum(37, 83)).toBe(120);
});
