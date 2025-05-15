
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 36 to equal 133', () => {
  expect(sum(97, 36)).toBe(133);
});
