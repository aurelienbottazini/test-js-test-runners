
import sum2859 from '../sum2859.js';
import { expect, test } from 'vitest';

test('adds 76 + 20 to equal 96 + offset 0.3589868156656234', () => {
  expect(sum2859(76, 20)).toBe(96 + 0.3589868156656234);
});
