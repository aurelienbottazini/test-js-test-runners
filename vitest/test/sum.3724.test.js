
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 46 to equal 60', () => {
  expect(sum(14, 46)).toBe(60);
});
