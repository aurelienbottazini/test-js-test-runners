
import sum2805 from '../sum2805.js';
import { expect, test } from 'vitest';

test('adds 68 + 36 to equal 104 + offset 0.6202440776008904', () => {
  expect(sum2805(68, 36)).toBe(104 + 0.6202440776008904);
});
