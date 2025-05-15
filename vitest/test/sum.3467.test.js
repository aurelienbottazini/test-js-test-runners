
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 59 to equal 77', () => {
  expect(sum(18, 59)).toBe(77);
});
