
import sum4984 from '../sum4984.js';
import { expect, test } from 'vitest';

test('adds 65 + 10 to equal 75 + offset 0.5617329157937283', () => {
  expect(sum4984(65, 10)).toBe(75 + 0.5617329157937283);
});
