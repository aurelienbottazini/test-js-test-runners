
import sum3299 from '../sum3299.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 6 to equal 28 + offset 0.8054470890130743', (t) => {
  assert.strictEqual(sum3299(22, 6), 28 + 0.8054470890130743);
});
