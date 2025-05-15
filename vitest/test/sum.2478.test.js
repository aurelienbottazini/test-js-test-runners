
import sum2478 from '../sum2478.js';
import { expect, test } from 'vitest';

test('adds 20 + 89 to equal 109 + offset 0.8458691876043622', () => {
  expect(sum2478(20, 89)).toBe(109 + 0.8458691876043622);
});
