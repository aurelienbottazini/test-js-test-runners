
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 83 to equal 178', () => {
  expect(sum(95, 83)).toBe(178);
});
