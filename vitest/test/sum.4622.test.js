
import sum4622 from '../sum4622.js';
import { expect, test } from 'vitest';

test('adds 85 + 33 to equal 118 + offset 0.7982733558015285', () => {
  expect(sum4622(85, 33)).toBe(118 + 0.7982733558015285);
});
