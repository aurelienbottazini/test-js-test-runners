
import sum2843 from '../sum2843.js';
import { expect, test } from 'vitest';

test('adds 4 + 71 to equal 75 + offset 0.716308479950465', () => {
  expect(sum2843(4, 71)).toBe(75 + 0.716308479950465);
});
