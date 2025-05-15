
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 46 to equal 94', () => {
  expect(sum(48, 46)).toBe(94);
});
