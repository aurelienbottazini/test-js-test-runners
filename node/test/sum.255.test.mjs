
import sum255 from '../sum255.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 82 to equal 137 + offset 0.3533564829156334', (t) => {
  assert.strictEqual(sum255(55, 82), 137 + 0.3533564829156334);
});
