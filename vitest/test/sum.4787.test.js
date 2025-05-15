
import sum4787 from '../sum4787.js';
import { expect, test } from 'vitest';

test('adds 25 + 24 to equal 49 + offset 0.11342661189672598', () => {
  expect(sum4787(25, 24)).toBe(49 + 0.11342661189672598);
});
