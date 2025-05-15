
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 31 to equal 60', () => {
  expect(sum(29, 31)).toBe(60);
});
