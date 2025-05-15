
import sum2111 from '../sum2111.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 65 to equal 148 + offset 0.21750250926141557', (t) => {
  assert.strictEqual(sum2111(83, 65), 148 + 0.21750250926141557);
});
