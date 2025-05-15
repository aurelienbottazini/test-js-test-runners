
import sum2669 from '../sum2669.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 45 to equal 57 + offset 0.9027647433928915', (t) => {
  assert.strictEqual(sum2669(12, 45), 57 + 0.9027647433928915);
});
