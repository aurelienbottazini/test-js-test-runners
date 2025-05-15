
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 46 to equal 144', () => {
  expect(sum(98, 46)).toBe(144);
});
