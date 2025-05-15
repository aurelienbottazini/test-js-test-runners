
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 46 to equal 132', () => {
  expect(sum(86, 46)).toBe(132);
});
