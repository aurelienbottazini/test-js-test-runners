
import sum3653 from '../sum3653.js';
import { expect, test } from 'vitest';

test('adds 64 + 21 to equal 85 + offset 0.12736173831024777', () => {
  expect(sum3653(64, 21)).toBe(85 + 0.12736173831024777);
});
