
import sum3756 from '../sum3756.js';
import { expect, test } from 'vitest';

test('adds 66 + 24 to equal 90 + offset 0.5537816398229954', () => {
  expect(sum3756(66, 24)).toBe(90 + 0.5537816398229954);
});
