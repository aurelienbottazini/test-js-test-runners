
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 46 to equal 128', () => {
  expect(sum(82, 46)).toBe(128);
});
