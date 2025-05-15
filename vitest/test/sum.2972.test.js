
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 46 to equal 136', () => {
  expect(sum(90, 46)).toBe(136);
});
