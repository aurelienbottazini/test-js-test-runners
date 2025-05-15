
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 0 to equal 20', () => {
  expect(sum(20, 0)).toBe(20);
});
