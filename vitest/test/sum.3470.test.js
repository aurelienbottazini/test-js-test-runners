
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 31 to equal 80', () => {
  expect(sum(49, 31)).toBe(80);
});
