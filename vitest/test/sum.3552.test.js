
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 57 to equal 128', () => {
  expect(sum(71, 57)).toBe(128);
});
