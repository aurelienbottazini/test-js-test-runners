
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 19 to equal 62', () => {
  expect(sum(43, 19)).toBe(62);
});
