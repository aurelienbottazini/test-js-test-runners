
import sum2192 from '../sum2192.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 44 to equal 56 + offset 0.0628652875758906', (t) => {
  assert.strictEqual(sum2192(12, 44), 56 + 0.0628652875758906);
});
