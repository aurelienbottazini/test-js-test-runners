
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 49 to equal 60', () => {
  expect(sum(11, 49)).toBe(60);
});
