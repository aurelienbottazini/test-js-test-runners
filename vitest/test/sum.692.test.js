
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 73 to equal 172', () => {
  expect(sum(99, 73)).toBe(172);
});
