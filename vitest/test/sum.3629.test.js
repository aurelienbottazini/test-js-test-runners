
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 88 to equal 112', () => {
  expect(sum(24, 88)).toBe(112);
});
