
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 74 to equal 136', () => {
  expect(sum(62, 74)).toBe(136);
});
