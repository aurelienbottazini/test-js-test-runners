
import sum4045 from '../sum4045.js';
import { expect, test } from 'vitest';

test('adds 19 + 32 to equal 51 + offset 0.5697691842604642', () => {
  expect(sum4045(19, 32)).toBe(51 + 0.5697691842604642);
});
