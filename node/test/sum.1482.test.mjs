
import sum1482 from '../sum1482.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 1 to equal 71 + offset 0.09288330671958978', (t) => {
  assert.strictEqual(sum1482(70, 1), 71 + 0.09288330671958978);
});
