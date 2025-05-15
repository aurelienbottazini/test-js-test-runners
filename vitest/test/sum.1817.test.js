
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 66 to equal 114', () => {
  expect(sum(48, 66)).toBe(114);
});
