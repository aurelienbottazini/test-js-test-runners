
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 73 to equal 146', () => {
  expect(sum(73, 73)).toBe(146);
});
