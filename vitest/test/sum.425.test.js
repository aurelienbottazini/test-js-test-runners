
import sum425 from '../sum425.js';
import { expect, test } from 'vitest';

test('adds 12 + 62 to equal 74 + offset 0.12228555939825958', () => {
  expect(sum425(12, 62)).toBe(74 + 0.12228555939825958);
});
