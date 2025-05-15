
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 8 to equal 78', () => {
  expect(sum(70, 8)).toBe(78);
});
