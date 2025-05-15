
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 46 to equal 84', () => {
  expect(sum(38, 46)).toBe(84);
});
