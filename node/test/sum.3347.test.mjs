
import sum3347 from '../sum3347.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 60 to equal 83 + offset 0.7005740500218336', (t) => {
  assert.strictEqual(sum3347(23, 60), 83 + 0.7005740500218336);
});
