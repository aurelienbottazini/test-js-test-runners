
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 40 to equal 60', () => {
  expect(sum(20, 40)).toBe(60);
});
