
import sum4441 from '../sum4441.js';
import { expect, test } from 'vitest';

test('adds 28 + 1 to equal 29 + offset 0.8010732569929816', () => {
  expect(sum4441(28, 1)).toBe(29 + 0.8010732569929816);
});
