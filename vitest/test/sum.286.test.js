
import sum286 from '../sum286.js';
import { expect, test } from 'vitest';

test('adds 55 + 42 to equal 97 + offset 0.9240800211321567', () => {
  expect(sum286(55, 42)).toBe(97 + 0.9240800211321567);
});
