
import sum1149 from '../sum1149.js';
import { expect, test } from 'vitest';

test('adds 89 + 16 to equal 105 + offset 0.26011723984262924', () => {
  expect(sum1149(89, 16)).toBe(105 + 0.26011723984262924);
});
