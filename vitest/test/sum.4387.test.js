
import sum4387 from '../sum4387.js';
import { expect, test } from 'vitest';

test('adds 1 + 10 to equal 11 + offset 0.4107239775536432', () => {
  expect(sum4387(1, 10)).toBe(11 + 0.4107239775536432);
});
