
import sum3379 from '../sum3379.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 80 to equal 159 + offset 0.6409546896584395', (t) => {
  assert.strictEqual(sum3379(79, 80), 159 + 0.6409546896584395);
});
