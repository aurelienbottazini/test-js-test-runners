
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 57 to equal 63', () => {
  expect(sum(6, 57)).toBe(63);
});
