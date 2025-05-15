
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 75 to equal 137', () => {
  expect(sum(62, 75)).toBe(137);
});
