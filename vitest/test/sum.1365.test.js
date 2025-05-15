
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 32 to equal 38', () => {
  expect(sum(6, 32)).toBe(38);
});
