
import sum4212 from '../sum4212.js';
import { expect, test } from 'vitest';

test('adds 41 + 21 to equal 62 + offset 0.3557456754806554', () => {
  expect(sum4212(41, 21)).toBe(62 + 0.3557456754806554);
});
