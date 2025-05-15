
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 90 to equal 140', () => {
  expect(sum(50, 90)).toBe(140);
});
