
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 52 to equal 114', () => {
  expect(sum(62, 52)).toBe(114);
});
