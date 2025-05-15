
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 46 to equal 59', () => {
  expect(sum(13, 46)).toBe(59);
});
