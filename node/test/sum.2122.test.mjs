
import sum2122 from '../sum2122.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 76 to equal 136 + offset 0.5649858458478632', (t) => {
  assert.strictEqual(sum2122(60, 76), 136 + 0.5649858458478632);
});
