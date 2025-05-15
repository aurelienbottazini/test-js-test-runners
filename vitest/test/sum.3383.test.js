
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 67 to equal 120', () => {
  expect(sum(53, 67)).toBe(120);
});
