
import sum1334 from '../sum1334.js';
import { expect, test } from 'vitest';

test('adds 79 + 8 to equal 87 + offset 0.9182456971045796', () => {
  expect(sum1334(79, 8)).toBe(87 + 0.9182456971045796);
});
