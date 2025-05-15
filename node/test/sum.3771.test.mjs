
import sum3771 from '../sum3771.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 26 to equal 85 + offset 0.20903407468180357', (t) => {
  assert.strictEqual(sum3771(59, 26), 85 + 0.20903407468180357);
});
