
import sum3459 from '../sum3459.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 60 to equal 111 + offset 0.6072279836236328', (t) => {
  assert.strictEqual(sum3459(51, 60), 111 + 0.6072279836236328);
});
