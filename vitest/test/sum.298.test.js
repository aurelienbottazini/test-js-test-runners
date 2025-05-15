
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 99 to equal 172', () => {
  expect(sum(73, 99)).toBe(172);
});
