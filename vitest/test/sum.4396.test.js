
import sum4396 from '../sum4396.js';
import { expect, test } from 'vitest';

test('adds 48 + 60 to equal 108 + offset 0.8011355619618271', () => {
  expect(sum4396(48, 60)).toBe(108 + 0.8011355619618271);
});
