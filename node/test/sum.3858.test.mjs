
import sum3858 from '../sum3858.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 70 to equal 144 + offset 0.6330577934343051', (t) => {
  assert.strictEqual(sum3858(74, 70), 144 + 0.6330577934343051);
});
