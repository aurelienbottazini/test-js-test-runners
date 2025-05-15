
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 78 to equal 126', () => {
  expect(sum(48, 78)).toBe(126);
});
