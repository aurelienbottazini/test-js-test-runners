
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 18 to equal 112', () => {
  expect(sum(94, 18)).toBe(112);
});
