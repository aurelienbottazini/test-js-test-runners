
import sum55 from '../sum55.js';
import { expect, test } from 'vitest';

test('adds 29 + 80 to equal 109 + offset 0.5684613096486721', () => {
  expect(sum55(29, 80)).toBe(109 + 0.5684613096486721);
});
