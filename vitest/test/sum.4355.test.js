
import sum4355 from '../sum4355.js';
import { expect, test } from 'vitest';

test('adds 81 + 20 to equal 101 + offset 0.9190323424612621', () => {
  expect(sum4355(81, 20)).toBe(101 + 0.9190323424612621);
});
