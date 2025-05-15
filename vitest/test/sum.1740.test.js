
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 35 to equal 60', () => {
  expect(sum(25, 35)).toBe(60);
});
