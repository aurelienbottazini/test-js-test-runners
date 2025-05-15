
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 28 to equal 78', () => {
  expect(sum(50, 28)).toBe(78);
});
