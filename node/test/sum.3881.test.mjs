
import sum3881 from '../sum3881.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 75 to equal 123 + offset 0.5381317382475547', (t) => {
  assert.strictEqual(sum3881(48, 75), 123 + 0.5381317382475547);
});
