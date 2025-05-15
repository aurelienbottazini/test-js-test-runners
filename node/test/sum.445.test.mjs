
import sum445 from '../sum445.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 16 to equal 68 + offset 0.2992961270450696', (t) => {
  assert.strictEqual(sum445(52, 16), 68 + 0.2992961270450696);
});
