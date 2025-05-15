
import sum2331 from '../sum2331.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 91 to equal 91 + offset 0.8104769177533494', (t) => {
  assert.strictEqual(sum2331(0, 91), 91 + 0.8104769177533494);
});
