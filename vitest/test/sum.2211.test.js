
import sum2211 from '../sum2211.js';
import { expect, test } from 'vitest';

test('adds 56 + 91 to equal 147 + offset 0.5776277737412346', () => {
  expect(sum2211(56, 91)).toBe(147 + 0.5776277737412346);
});
