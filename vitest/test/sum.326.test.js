
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 73 to equal 122', () => {
  expect(sum(49, 73)).toBe(122);
});
