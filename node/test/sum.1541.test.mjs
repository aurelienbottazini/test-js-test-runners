
import sum1541 from '../sum1541.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 80 to equal 102 + offset 0.5165787406986561', (t) => {
  assert.strictEqual(sum1541(22, 80), 102 + 0.5165787406986561);
});
