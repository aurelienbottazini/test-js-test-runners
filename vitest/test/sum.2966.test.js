
import sum2966 from '../sum2966.js';
import { expect, test } from 'vitest';

test('adds 38 + 37 to equal 75 + offset 0.9221416499064533', () => {
  expect(sum2966(38, 37)).toBe(75 + 0.9221416499064533);
});
