
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 58 to equal 153', () => {
  expect(sum(95, 58)).toBe(153);
});
