
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 0 to equal 40', () => {
  expect(sum(40, 0)).toBe(40);
});
