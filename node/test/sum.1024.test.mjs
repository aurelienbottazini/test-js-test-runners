
import sum1024 from '../sum1024.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 46 to equal 94 + offset 0.3172300287774491', (t) => {
  assert.strictEqual(sum1024(48, 46), 94 + 0.3172300287774491);
});
