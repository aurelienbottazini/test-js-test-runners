
import sum4855 from '../sum4855.js';
import { expect, test } from 'vitest';

test('adds 66 + 70 to equal 136 + offset 0.9399061103571462', () => {
  expect(sum4855(66, 70)).toBe(136 + 0.9399061103571462);
});
