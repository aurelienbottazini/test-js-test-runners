
import sum4981 from '../sum4981.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 88 to equal 176 + offset 0.3902854185066994', (t) => {
  assert.strictEqual(sum4981(88, 88), 176 + 0.3902854185066994);
});
