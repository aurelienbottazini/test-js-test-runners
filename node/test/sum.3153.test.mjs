
import sum3153 from '../sum3153.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 98 to equal 99 + offset 0.7066953530659602', (t) => {
  assert.strictEqual(sum3153(1, 98), 99 + 0.7066953530659602);
});
