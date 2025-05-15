
import sum4173 from '../sum4173.js';
import { expect, test } from 'vitest';

test('adds 75 + 5 to equal 80 + offset 0.1699274398767362', () => {
  expect(sum4173(75, 5)).toBe(80 + 0.1699274398767362);
});
