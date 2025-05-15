
import sum3497 from '../sum3497.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 64 to equal 93 + offset 0.9156022088554393', (t) => {
  assert.strictEqual(sum3497(29, 64), 93 + 0.9156022088554393);
});
