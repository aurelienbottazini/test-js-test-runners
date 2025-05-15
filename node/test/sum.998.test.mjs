
import sum998 from '../sum998.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 8 to equal 72 + offset 0.9617588818234307', (t) => {
  assert.strictEqual(sum998(64, 8), 72 + 0.9617588818234307);
});
