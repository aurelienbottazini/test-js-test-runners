
import sum33 from '../sum33.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 45 to equal 110 + offset 0.6963328644584289', (t) => {
  assert.strictEqual(sum33(65, 45), 110 + 0.6963328644584289);
});
