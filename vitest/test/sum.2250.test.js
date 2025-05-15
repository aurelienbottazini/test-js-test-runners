
import sum2250 from '../sum2250.js';
import { expect, test } from 'vitest';

test('adds 79 + 24 to equal 103 + offset 0.7387719489772022', () => {
  expect(sum2250(79, 24)).toBe(103 + 0.7387719489772022);
});
