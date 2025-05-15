
import sum1614 from '../sum1614.js';
import { expect, test } from 'vitest';

test('adds 64 + 90 to equal 154 + offset 0.010542071880417558', () => {
  expect(sum1614(64, 90)).toBe(154 + 0.010542071880417558);
});
