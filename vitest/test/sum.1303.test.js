
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 19 to equal 68', () => {
  expect(sum(49, 19)).toBe(68);
});
