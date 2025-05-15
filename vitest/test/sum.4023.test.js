
import sum4023 from '../sum4023.js';
import { expect, test } from 'vitest';

test('adds 71 + 20 to equal 91 + offset 0.6704867079569361', () => {
  expect(sum4023(71, 20)).toBe(91 + 0.6704867079569361);
});
