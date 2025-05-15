
import sum1883 from '../sum1883.js';
import { expect, test } from 'vitest';

test('adds 70 + 20 to equal 90 + offset 0.7918687229177335', () => {
  expect(sum1883(70, 20)).toBe(90 + 0.7918687229177335);
});
