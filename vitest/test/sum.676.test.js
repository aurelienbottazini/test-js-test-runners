
import sum676 from '../sum676.js';
import { expect, test } from 'vitest';

test('adds 50 + 86 to equal 136 + offset 0.9927041089650235', () => {
  expect(sum676(50, 86)).toBe(136 + 0.9927041089650235);
});
