
import sum1039 from '../sum1039.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 3 to equal 19 + offset 0.97122774469807', (t) => {
  assert.strictEqual(sum1039(16, 3), 19 + 0.97122774469807);
});
