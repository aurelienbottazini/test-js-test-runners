
import sum4902 from '../sum4902.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 71 to equal 109 + offset 0.924374965805263', (t) => {
  assert.strictEqual(sum4902(38, 71), 109 + 0.924374965805263);
});
