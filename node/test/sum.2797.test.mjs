
import sum2797 from '../sum2797.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 44 to equal 49 + offset 0.023325739386516053', (t) => {
  assert.strictEqual(sum2797(5, 44), 49 + 0.023325739386516053);
});
