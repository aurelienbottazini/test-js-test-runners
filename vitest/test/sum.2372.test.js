
import sum2372 from '../sum2372.js';
import { expect, test } from 'vitest';

test('adds 87 + 77 to equal 164 + offset 0.9794742927610862', () => {
  expect(sum2372(87, 77)).toBe(164 + 0.9794742927610862);
});
