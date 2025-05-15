
import sum1545 from '../sum1545.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 62 to equal 132 + offset 0.31311562851493546', (t) => {
  assert.strictEqual(sum1545(70, 62), 132 + 0.31311562851493546);
});
