
import sum3532 from '../sum3532.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 26 to equal 121 + offset 0.18052919207527096', (t) => {
  assert.strictEqual(sum3532(95, 26), 121 + 0.18052919207527096);
});
