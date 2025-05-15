
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 18 to equal 80', () => {
  expect(sum(62, 18)).toBe(80);
});
