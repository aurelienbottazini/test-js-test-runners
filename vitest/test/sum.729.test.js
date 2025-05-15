
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 40 to equal 90', () => {
  expect(sum(50, 40)).toBe(90);
});
