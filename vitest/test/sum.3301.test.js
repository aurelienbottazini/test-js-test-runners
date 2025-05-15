
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 51 to equal 138', () => {
  expect(sum(87, 51)).toBe(138);
});
