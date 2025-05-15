
import sum4014 from '../sum4014.js';
import { expect, test } from 'vitest';

test('adds 23 + 21 to equal 44 + offset 0.8121266118853877', () => {
  expect(sum4014(23, 21)).toBe(44 + 0.8121266118853877);
});
