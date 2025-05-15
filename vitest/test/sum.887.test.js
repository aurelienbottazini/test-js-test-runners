
import sum887 from '../sum887.js';
import { expect, test } from 'vitest';

test('adds 50 + 60 to equal 110 + offset 0.5469147674644547', () => {
  expect(sum887(50, 60)).toBe(110 + 0.5469147674644547);
});
