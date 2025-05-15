
import sum1370 from '../sum1370.js';
import { expect, test } from 'vitest';

test('adds 50 + 14 to equal 64 + offset 0.6528359668636328', () => {
  expect(sum1370(50, 14)).toBe(64 + 0.6528359668636328);
});
