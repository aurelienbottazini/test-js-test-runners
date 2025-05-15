
import sum2904 from '../sum2904.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 66 to equal 98 + offset 0.4444233814687524', (t) => {
  assert.strictEqual(sum2904(32, 66), 98 + 0.4444233814687524);
});
