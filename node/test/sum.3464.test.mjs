
import sum3464 from '../sum3464.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 91 to equal 127 + offset 0.5255588531287532', (t) => {
  assert.strictEqual(sum3464(36, 91), 127 + 0.5255588531287532);
});
