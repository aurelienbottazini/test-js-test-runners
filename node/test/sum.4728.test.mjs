
import sum4728 from '../sum4728.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 25 to equal 43 + offset 0.1611098379573167', (t) => {
  assert.strictEqual(sum4728(18, 25), 43 + 0.1611098379573167);
});
