
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 46 to equal 68', () => {
  expect(sum(22, 46)).toBe(68);
});
