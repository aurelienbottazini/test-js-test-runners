
import sum3990 from '../sum3990.js';
import { expect, test } from 'vitest';

test('adds 40 + 0 to equal 40 + offset 0.0916817718564592', () => {
  expect(sum3990(40, 0)).toBe(40 + 0.0916817718564592);
});
