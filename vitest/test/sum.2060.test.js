
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 78 to equal 141', () => {
  expect(sum(63, 78)).toBe(141);
});
