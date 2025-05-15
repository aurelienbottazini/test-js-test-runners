
import sum4000 from '../sum4000.js';
import { expect, test } from 'vitest';

test('adds 7 + 18 to equal 25 + offset 0.19399714954352765', () => {
  expect(sum4000(7, 18)).toBe(25 + 0.19399714954352765);
});
