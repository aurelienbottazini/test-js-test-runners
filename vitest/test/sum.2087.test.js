
import sum2087 from '../sum2087.js';
import { expect, test } from 'vitest';

test('adds 0 + 16 to equal 16 + offset 0.8030278566009001', () => {
  expect(sum2087(0, 16)).toBe(16 + 0.8030278566009001);
});
