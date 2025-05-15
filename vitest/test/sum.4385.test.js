
import sum4385 from '../sum4385.js';
import { expect, test } from 'vitest';

test('adds 88 + 18 to equal 106 + offset 0.6906606536394048', () => {
  expect(sum4385(88, 18)).toBe(106 + 0.6906606536394048);
});
