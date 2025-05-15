
import sum3439 from '../sum3439.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 8 to equal 63 + offset 0.8991133554952532', (t) => {
  assert.strictEqual(sum3439(55, 8), 63 + 0.8991133554952532);
});
