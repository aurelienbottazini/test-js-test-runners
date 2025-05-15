
import sum3223 from '../sum3223.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 63 to equal 122 + offset 0.868036496282612', (t) => {
  assert.strictEqual(sum3223(59, 63), 122 + 0.868036496282612);
});
