
import sum688 from '../sum688.js';
import { expect, test } from 'vitest';

test('adds 90 + 38 to equal 128 + offset 0.8004243709707342', () => {
  expect(sum688(90, 38)).toBe(128 + 0.8004243709707342);
});
