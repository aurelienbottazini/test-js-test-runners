
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 33 to equal 59', () => {
  expect(sum(26, 33)).toBe(59);
});
