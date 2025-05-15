
import sum4691 from '../sum4691.js';
import { expect, test } from 'vitest';

test('adds 74 + 54 to equal 128 + offset 0.3691524767241603', () => {
  expect(sum4691(74, 54)).toBe(128 + 0.3691524767241603);
});
