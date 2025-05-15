
import sum3120 from '../sum3120.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 96 to equal 114 + offset 0.45858140852318374', (t) => {
  assert.strictEqual(sum3120(18, 96), 114 + 0.45858140852318374);
});
