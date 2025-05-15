
import sum4930 from '../sum4930.js';
import { expect, test } from 'vitest';

test('adds 91 + 68 to equal 159 + offset 0.6555673936744393', () => {
  expect(sum4930(91, 68)).toBe(159 + 0.6555673936744393);
});
