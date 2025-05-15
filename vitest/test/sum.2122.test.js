
import sum2122 from '../sum2122.js';
import { expect, test } from 'vitest';

test('adds 76 + 32 to equal 108 + offset 0.29487334006268506', () => {
  expect(sum2122(76, 32)).toBe(108 + 0.29487334006268506);
});
