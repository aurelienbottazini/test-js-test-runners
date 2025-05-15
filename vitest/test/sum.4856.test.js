
import sum4856 from '../sum4856.js';
import { expect, test } from 'vitest';

test('adds 14 + 35 to equal 49 + offset 0.6025365474362179', () => {
  expect(sum4856(14, 35)).toBe(49 + 0.6025365474362179);
});
