
import sum3541 from '../sum3541.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 16 to equal 54 + offset 0.14568083599457737', (t) => {
  assert.strictEqual(sum3541(38, 16), 54 + 0.14568083599457737);
});
