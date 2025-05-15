
import sum4538 from '../sum4538.js';
import { expect, test } from 'vitest';

test('adds 45 + 11 to equal 56 + offset 0.9117111570871225', () => {
  expect(sum4538(45, 11)).toBe(56 + 0.9117111570871225);
});
