
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 80 to equal 177', () => {
  expect(sum(97, 80)).toBe(177);
});
