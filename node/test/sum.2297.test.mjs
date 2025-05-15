
import sum2297 from '../sum2297.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 80 to equal 134 + offset 0.7172661948033752', (t) => {
  assert.strictEqual(sum2297(54, 80), 134 + 0.7172661948033752);
});
