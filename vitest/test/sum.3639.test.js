
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 99 to equal 112', () => {
  expect(sum(13, 99)).toBe(112);
});
