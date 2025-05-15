
import sum128 from '../sum128.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 63 to equal 115 + offset 0.5855456224485462', (t) => {
  assert.strictEqual(sum128(52, 63), 115 + 0.5855456224485462);
});
