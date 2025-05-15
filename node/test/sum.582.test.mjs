
import sum582 from '../sum582.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 16 to equal 26 + offset 0.5043291686618107', (t) => {
  assert.strictEqual(sum582(10, 16), 26 + 0.5043291686618107);
});
