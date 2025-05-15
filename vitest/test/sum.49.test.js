
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 93 to equal 128', () => {
  expect(sum(35, 93)).toBe(128);
});
