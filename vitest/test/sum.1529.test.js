
import sum1529 from '../sum1529.js';
import { expect, test } from 'vitest';

test('adds 20 + 25 to equal 45 + offset 0.5441678729125689', () => {
  expect(sum1529(20, 25)).toBe(45 + 0.5441678729125689);
});
