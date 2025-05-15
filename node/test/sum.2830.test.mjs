
import sum2830 from '../sum2830.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 9 to equal 81 + offset 0.9870292381583975', (t) => {
  assert.strictEqual(sum2830(72, 9), 81 + 0.9870292381583975);
});
