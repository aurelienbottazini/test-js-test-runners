
import sum3587 from '../sum3587.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 11 to equal 108 + offset 0.18389544330430552', (t) => {
  assert.strictEqual(sum3587(97, 11), 108 + 0.18389544330430552);
});
