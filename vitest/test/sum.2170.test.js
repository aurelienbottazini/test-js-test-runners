
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 93 to equal 168', () => {
  expect(sum(75, 93)).toBe(168);
});
