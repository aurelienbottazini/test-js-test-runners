
import sum3376 from '../sum3376.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 98 to equal 197 + offset 0.010972026292995207', (t) => {
  assert.strictEqual(sum3376(99, 98), 197 + 0.010972026292995207);
});
