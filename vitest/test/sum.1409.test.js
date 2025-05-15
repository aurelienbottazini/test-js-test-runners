
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 19 to equal 94', () => {
  expect(sum(75, 19)).toBe(94);
});
