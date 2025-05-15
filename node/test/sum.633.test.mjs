
import sum633 from '../sum633.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 90 to equal 154 + offset 0.35991467521350307', (t) => {
  assert.strictEqual(sum633(64, 90), 154 + 0.35991467521350307);
});
