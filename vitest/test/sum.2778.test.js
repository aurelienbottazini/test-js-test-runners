
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 21 to equal 112', () => {
  expect(sum(91, 21)).toBe(112);
});
