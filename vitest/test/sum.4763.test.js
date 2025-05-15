
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 62 to equal 137', () => {
  expect(sum(75, 62)).toBe(137);
});
