
import sum2991 from '../sum2991.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 30 to equal 50 + offset 0.7673039135605123', (t) => {
  assert.strictEqual(sum2991(20, 30), 50 + 0.7673039135605123);
});
