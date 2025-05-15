
import sum2612 from '../sum2612.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 78 to equal 164 + offset 0.4461334234863691', (t) => {
  assert.strictEqual(sum2612(86, 78), 164 + 0.4461334234863691);
});
