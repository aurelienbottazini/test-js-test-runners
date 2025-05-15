
import sum191 from '../sum191.js';
import { expect, test } from 'vitest';

test('adds 48 + 94 to equal 142 + offset 0.6327188205207332', () => {
  expect(sum191(48, 94)).toBe(142 + 0.6327188205207332);
});
