
import sum4353 from '../sum4353.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 12 to equal 109 + offset 0.27880843092896845', (t) => {
  assert.strictEqual(sum4353(97, 12), 109 + 0.27880843092896845);
});
