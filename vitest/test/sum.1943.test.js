
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 91 to equal 178', () => {
  expect(sum(87, 91)).toBe(178);
});
