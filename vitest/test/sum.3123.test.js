
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 76 to equal 112', () => {
  expect(sum(36, 76)).toBe(112);
});
