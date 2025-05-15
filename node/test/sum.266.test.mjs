
import sum266 from '../sum266.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 61 to equal 98 + offset 0.3701902163323092', (t) => {
  assert.strictEqual(sum266(37, 61), 98 + 0.3701902163323092);
});
