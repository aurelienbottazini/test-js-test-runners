
import sum4418 from '../sum4418.js';
import { expect, test } from 'vitest';

test('adds 89 + 1 to equal 90 + offset 0.6332190361323305', () => {
  expect(sum4418(89, 1)).toBe(90 + 0.6332190361323305);
});
