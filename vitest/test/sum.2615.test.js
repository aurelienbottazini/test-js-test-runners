
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 28 to equal 41', () => {
  expect(sum(13, 28)).toBe(41);
});
