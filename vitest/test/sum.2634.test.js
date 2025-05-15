
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 46 to equal 72', () => {
  expect(sum(26, 46)).toBe(72);
});
