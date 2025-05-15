
import sum4330 from '../sum4330.js';
import { expect, test } from 'vitest';

test('adds 49 + 18 to equal 67 + offset 0.15149717427376252', () => {
  expect(sum4330(49, 18)).toBe(67 + 0.15149717427376252);
});
