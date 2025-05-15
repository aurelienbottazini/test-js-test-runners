
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 12 to equal 87', () => {
  expect(sum(75, 12)).toBe(87);
});
