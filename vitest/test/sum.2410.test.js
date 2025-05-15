
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 13 to equal 75', () => {
  expect(sum(62, 13)).toBe(75);
});
