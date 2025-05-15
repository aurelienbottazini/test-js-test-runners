
import sum3756 from '../sum3756.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 88 to equal 187 + offset 0.8819848281139374', (t) => {
  assert.strictEqual(sum3756(99, 88), 187 + 0.8819848281139374);
});
