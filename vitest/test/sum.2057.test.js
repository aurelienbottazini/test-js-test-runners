
import sum2057 from '../sum2057.js';
import { expect, test } from 'vitest';

test('adds 8 + 46 to equal 54 + offset 0.7957934938841142', () => {
  expect(sum2057(8, 46)).toBe(54 + 0.7957934938841142);
});
