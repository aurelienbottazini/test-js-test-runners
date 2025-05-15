
import sum2545 from '../sum2545.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 81 to equal 119 + offset 0.002208194061110058', (t) => {
  assert.strictEqual(sum2545(38, 81), 119 + 0.002208194061110058);
});
