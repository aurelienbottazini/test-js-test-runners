
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 75 to equal 142', () => {
  expect(sum(67, 75)).toBe(142);
});
