
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 90 to equal 95', () => {
  expect(sum(5, 90)).toBe(95);
});
