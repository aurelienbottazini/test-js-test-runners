
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 46 to equal 120', () => {
  expect(sum(74, 46)).toBe(120);
});
