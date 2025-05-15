
import sum408 from '../sum408.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 73 to equal 168 + offset 0.6736645569040296', (t) => {
  assert.strictEqual(sum408(95, 73), 168 + 0.6736645569040296);
});
