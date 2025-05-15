
import sum3180 from '../sum3180.js';
import { expect, test } from 'vitest';

test('adds 88 + 54 to equal 142 + offset 0.5568185921947252', () => {
  expect(sum3180(88, 54)).toBe(142 + 0.5568185921947252);
});
