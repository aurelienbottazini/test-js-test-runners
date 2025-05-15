
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 73 to equal 100', () => {
  expect(sum(27, 73)).toBe(100);
});
