
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});
