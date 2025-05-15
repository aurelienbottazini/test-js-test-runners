
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 73 to equal 112', () => {
  expect(sum(39, 73)).toBe(112);
});
