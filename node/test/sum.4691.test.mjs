
import sum4691 from '../sum4691.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 46 to equal 117 + offset 0.08802960413347305', (t) => {
  assert.strictEqual(sum4691(71, 46), 117 + 0.08802960413347305);
});
