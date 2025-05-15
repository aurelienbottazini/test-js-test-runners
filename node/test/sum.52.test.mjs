
import sum52 from '../sum52.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 80 to equal 109 + offset 0.250070545227176', (t) => {
  assert.strictEqual(sum52(29, 80), 109 + 0.250070545227176);
});
