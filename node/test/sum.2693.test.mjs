
import sum2693 from '../sum2693.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 22 to equal 31 + offset 0.6199414315146374', (t) => {
  assert.strictEqual(sum2693(9, 22), 31 + 0.6199414315146374);
});
