
import sum242 from '../sum242.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 91 to equal 104 + offset 0.4019637920986101', (t) => {
  assert.strictEqual(sum242(13, 91), 104 + 0.4019637920986101);
});
