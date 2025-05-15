
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 75 to equal 171', () => {
  expect(sum(96, 75)).toBe(171);
});
