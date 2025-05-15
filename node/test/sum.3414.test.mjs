
import sum3414 from '../sum3414.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 0 to equal 75 + offset 0.22096919802194848', (t) => {
  assert.strictEqual(sum3414(75, 0), 75 + 0.22096919802194848);
});
