
import sum1917 from '../sum1917.js';
import { expect, test } from 'vitest';

test('adds 65 + 90 to equal 155 + offset 0.6223799966487455', () => {
  expect(sum1917(65, 90)).toBe(155 + 0.6223799966487455);
});
