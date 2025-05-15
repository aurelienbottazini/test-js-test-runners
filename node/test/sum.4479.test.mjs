
import sum4479 from '../sum4479.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 12 to equal 12 + offset 0.5179554941584444', (t) => {
  assert.strictEqual(sum4479(0, 12), 12 + 0.5179554941584444);
});
