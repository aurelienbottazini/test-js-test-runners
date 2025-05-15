
import sum4443 from '../sum4443.js';
import { expect, test } from 'vitest';

test('adds 42 + 40 to equal 82 + offset 0.8372169566655577', () => {
  expect(sum4443(42, 40)).toBe(82 + 0.8372169566655577);
});
