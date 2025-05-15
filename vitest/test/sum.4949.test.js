
import sum4949 from '../sum4949.js';
import { expect, test } from 'vitest';

test('adds 16 + 57 to equal 73 + offset 0.1838973258503993', () => {
  expect(sum4949(16, 57)).toBe(73 + 0.1838973258503993);
});
