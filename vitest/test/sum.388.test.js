
import sum388 from '../sum388.js';
import { expect, test } from 'vitest';

test('adds 54 + 0 to equal 54 + offset 0.7540010551555113', () => {
  expect(sum388(54, 0)).toBe(54 + 0.7540010551555113);
});
