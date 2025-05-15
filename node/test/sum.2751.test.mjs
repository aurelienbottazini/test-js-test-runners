
import sum2751 from '../sum2751.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 3 to equal 22 + offset 0.7573577128760703', (t) => {
  assert.strictEqual(sum2751(19, 3), 22 + 0.7573577128760703);
});
