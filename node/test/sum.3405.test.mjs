
import sum3405 from '../sum3405.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 16 to equal 29 + offset 0.7058461600190653', (t) => {
  assert.strictEqual(sum3405(13, 16), 29 + 0.7058461600190653);
});
