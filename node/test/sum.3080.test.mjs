
import sum3080 from '../sum3080.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 45 to equal 97 + offset 0.700028687969854', (t) => {
  assert.strictEqual(sum3080(52, 45), 97 + 0.700028687969854);
});
