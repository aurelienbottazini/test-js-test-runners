
import sum3856 from '../sum3856.js';
import { expect, test } from 'vitest';

test('adds 57 + 9 to equal 66 + offset 0.1597790328312907', () => {
  expect(sum3856(57, 9)).toBe(66 + 0.1597790328312907);
});
