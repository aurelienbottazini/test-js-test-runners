
import sum3545 from '../sum3545.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 81 to equal 101 + offset 0.9347925235054548', (t) => {
  assert.strictEqual(sum3545(20, 81), 101 + 0.9347925235054548);
});
