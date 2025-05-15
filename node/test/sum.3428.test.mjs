
import sum3428 from '../sum3428.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 97 to equal 163 + offset 0.1807909594729371', (t) => {
  assert.strictEqual(sum3428(66, 97), 163 + 0.1807909594729371);
});
