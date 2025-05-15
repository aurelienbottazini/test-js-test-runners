
import sum1274 from '../sum1274.js';
import { expect, test } from 'vitest';

test('adds 31 + 78 to equal 109 + offset 0.3134497135038651', () => {
  expect(sum1274(31, 78)).toBe(109 + 0.3134497135038651);
});
