
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 78 to equal 110', () => {
  expect(sum(32, 78)).toBe(110);
});
