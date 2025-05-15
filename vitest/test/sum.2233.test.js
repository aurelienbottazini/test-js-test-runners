
import sum2233 from '../sum2233.js';
import { expect, test } from 'vitest';

test('adds 62 + 16 to equal 78 + offset 0.6966764949109172', () => {
  expect(sum2233(62, 16)).toBe(78 + 0.6966764949109172);
});
