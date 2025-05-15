
import sum4952 from '../sum4952.js';
import { expect, test } from 'vitest';

test('adds 51 + 8 to equal 59 + offset 0.2758599307424229', () => {
  expect(sum4952(51, 8)).toBe(59 + 0.2758599307424229);
});
