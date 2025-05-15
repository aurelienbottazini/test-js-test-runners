
import sum1978 from '../sum1978.js';
import { expect, test } from 'vitest';

test('adds 14 + 60 to equal 74 + offset 0.4050197433026256', () => {
  expect(sum1978(14, 60)).toBe(74 + 0.4050197433026256);
});
