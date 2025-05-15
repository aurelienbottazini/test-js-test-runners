
import sum4076 from '../sum4076.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 32 to equal 108 + offset 0.4464746591881633', (t) => {
  assert.strictEqual(sum4076(76, 32), 108 + 0.4464746591881633);
});
