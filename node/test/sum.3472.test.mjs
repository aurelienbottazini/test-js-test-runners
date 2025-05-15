
import sum3472 from '../sum3472.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 37 to equal 74 + offset 0.47773757839765807', (t) => {
  assert.strictEqual(sum3472(37, 37), 74 + 0.47773757839765807);
});
