
import sum2105 from '../sum2105.js';
import { expect, test } from 'vitest';

test('adds 25 + 88 to equal 113 + offset 0.2759880907786437', () => {
  expect(sum2105(25, 88)).toBe(113 + 0.2759880907786437);
});
