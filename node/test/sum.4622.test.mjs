
import sum4622 from '../sum4622.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 46 to equal 79 + offset 0.8053187039384898', (t) => {
  assert.strictEqual(sum4622(33, 46), 79 + 0.8053187039384898);
});
