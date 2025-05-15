
import sum4056 from '../sum4056.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 13 to equal 98 + offset 0.8558955347191965', (t) => {
  assert.strictEqual(sum4056(85, 13), 98 + 0.8558955347191965);
});
