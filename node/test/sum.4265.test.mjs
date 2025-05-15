
import sum4265 from '../sum4265.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 32 to equal 44 + offset 0.9543740186638092', (t) => {
  assert.strictEqual(sum4265(12, 32), 44 + 0.9543740186638092);
});
