
import sum938 from '../sum938.js';
import { expect, test } from 'vitest';

test('adds 95 + 3 to equal 98 + offset 0.9906700883637338', () => {
  expect(sum938(95, 3)).toBe(98 + 0.9906700883637338);
});
