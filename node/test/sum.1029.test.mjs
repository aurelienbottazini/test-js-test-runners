
import sum1029 from '../sum1029.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 52 to equal 135 + offset 0.43551711197764653', (t) => {
  assert.strictEqual(sum1029(83, 52), 135 + 0.43551711197764653);
});
