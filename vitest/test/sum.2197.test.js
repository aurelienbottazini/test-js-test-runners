
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 81 to equal 120', () => {
  expect(sum(39, 81)).toBe(120);
});
